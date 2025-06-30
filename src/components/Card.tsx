const Card = () => {
  return (
    <div className="w-80 bg-shadow-green-500 hover:shadow-2xl hover:shadow-teal-100/20 p-4 rounded-2xl hover:-translate-y-1 transition-all">
      <div className="w-full">
        <iframe className="w-full h-full rounded-2xl" src="https://www.youtube.com/embed/-9azrdZEPCE?si=Fp3xdYAyTB5NaU6c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-base">
          <span>❤️</span> Title goes here
        </h1>
        <div className="mt-4 flex justify-between items-center text-sm font-medium text-shadow-green-950">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-trash hover:cursor-pointer hover:scale-105"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          <p>26/06/2025</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
