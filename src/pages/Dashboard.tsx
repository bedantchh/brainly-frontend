import {useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Modal from "../components/Modal";
import axios from "axios";

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
  console.log(userContent);
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
            <Card key={c._id} link={c.link} title={c.title} type={c.type} />
          ))}
          {/* <Card
            title="Tit le"
            type="youtube"
            link="https://www.youtube.com/watch?v=WevY8WuTgJY"
          />
          <Card
            title="Title goes here"
            type="twitter"
            link="https://twitter.com/username/status/1939743280599900414"
          />
          <Card
            title="Tit le"
            type="youtube"
            link="https://www.youtube.com/watch?v=WevY8WuTgJY"
          />
          <Card
            title="Tit le"
            type="youtube"
            link="https://www.youtube.com/watch?v=WevY8WuTgJY"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
