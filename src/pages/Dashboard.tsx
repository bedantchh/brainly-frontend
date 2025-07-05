import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Modal from "../components/Modal";
import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";

const Dashboard = () => {
  // enum ContentType {
  //   youtube = "youtube",
  //   twitter = "twitter",
  // }
  interface ContentItem {
    _id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
  }
  interface ApiResponse {
    content: ContentItem[];
  }
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [open, setOpen] = useState(false);
  const [userContent, setUserContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    try {
      const content = await axios.get<ApiResponse>(
        `${BACKEND_URL}/api/v1/content`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setUserContent(content.data?.content);
    } catch (e) {
      console.error(e);
    }
  }
  function fallback() {
    return (
      <>
        <p>Error</p>
      </>
    );
  }
  async function deleteCard(id:string) {
    try {
      const contentId = id;
      await axios.delete(`${BACKEND_URL}/api/v1/delete`, {
        headers: { Authorization: localStorage.getItem("token") },
        data:{contentId:contentId}
      } as any);
      fetchContent();
      // console.log(contentId)
    } catch (error) {
      console.error(error);
    }

    // console.log("delete this",id)
  }
  return (
    <>
      <Header onOpen={() => setOpen(true)} />
      <Modal
        onSubmitSuccess={fetchContent}
        open={open}
        onClose={() => setOpen(false)}
      />
      <div className="max-w-6xl mx-auto mt-12">
        <div className="columns-1 md:columns-2 lg:columns-3 mx-auto gap-4 px-4 md:px-10">
          {userContent.map((c: ContentItem) => (
            <ErrorBoundary
              key={c._id}
              FallbackComponent={fallback}
              onError={(e) => console.error(e)}
            >
              <Card
                id={c._id}
                link={c.link}
                title={c.title}
                type={c.type}
                deleteIt={deleteCard}
              />
            </ErrorBoundary>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
