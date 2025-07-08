import { useEffect, useState } from "react";
import X from "../icons/X";
import Yt from "../icons/Yt";
import Link from "../icons/Link";

type CardProps = {
  id: string;
  userTitle: string;
  title: string;
  type?: "twitter" | "youtube" | "link";
  link?: string;
  deleteIt: (id: string) => void;
};

const Card = ({ id, title, userTitle, type, link, deleteIt }: CardProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      key={id}
      className="min-h-56 bg-shadow-green-500 hover:shadow-2xl hover:shadow-teal-100/20 p-4 break-inside-avoid mb-4 rounded-2xl hover:-translate-y-1 transition-all flex flex-col"
    >
      {/* <div className="w-full mb-4">
        {loading ? <div className="w-full h-40 bg-gray-300 animate-pulse rounded-2xl"></div> : (type === "youtube" ? (
          <iframe
            className="w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${link?.includes("watch?v=") ? link.split("?v=")[1] : link?.split(".be/")[1].split("?")[0]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <blockquote className="twitter-tweet"  data-conversation="none" data-cards="hidden">
            <a href={link}></a>
          </blockquote>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-between items-center">
          {type==="twitter"? <X/>: <Yt/>}
        <h1 className="font-semibold text-lg">
          {title}
        </h1>
        </div>
        <button onClick={()=>deleteIt(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-trash text-sm font-medium text-shadow-green-950 hover:cursor-pointer hover:scale-105"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          </button>
      </div> */}
      <div className="bg-[#ffffff6f] rounded-2xl w-full h-full flex flex-col gap-2 justify-center items-center mb-4 flex-4/5">
        {type === "twitter" && <X />}
        {type === "youtube" && <Yt />}
        {type === "link" && <Link />}
        <p>
          {title.length > 15 ? title.slice(0, 15) + "..." : title}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-between items-center">
          {type === "twitter" && <X />}
          {type === "youtube" && <Yt />}
          {type === "link" && <Link />}
          <h1 className="font-semibold text-lg">{userTitle}</h1>
        </div>
        <button onClick={() => deleteIt(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-trash text-sm font-medium text-shadow-green-950 hover:cursor-pointer hover:scale-105"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
