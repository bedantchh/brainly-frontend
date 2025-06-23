const Card = () => {
  return (
    <div className="w-56 bg-cyan-700 p-2 rounded-md">
      <div className="w-full h-24 bg-white rounded-md"></div>
      <div className="mt-2">
        <h1 className="font-bold text-base">
          <span>❤️</span> Title goes here
        </h1>
        <div className="mt-4 flex justify-between text-sm font-mediumtext-slate-900">
          <p>Delete</p>
          <p>26/06/2025</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
