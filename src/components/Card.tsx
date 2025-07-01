import { useEffect, useState } from "react";

type CardProps = {
  id?: string;
  title: string;
  type: "twitter" | "youtube";
  link: string;
};

const Card = ({ id, title, type, link }: CardProps) => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const timeout =setTimeout(()=>setLoading(false),300)
    return ()=> clearTimeout(timeout)
  },[])
  return (
    <div key={id} className="w-80 h-fit min-h-56 bg-shadow-green-500 hover:shadow-2xl hover:shadow-teal-100/20 p-4 rounded-2xl hover:-translate-y-1 transition-all">
      <div className="mb-2 flex justify-between items-center">
        <h1 className="font-bold text-base">
          <span>❤️</span> {title}
        </h1>
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
      </div>
      <div className="w-full">
        {loading ? <div className="w-full h-40 bg-gray-300 animate-pulse rounded-2xl"></div> : (type === "youtube" ? (
          <iframe
            className="w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${link.split("?v=")[1]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        ))}
      </div>
      
    </div>
  );
};

export default Card;
