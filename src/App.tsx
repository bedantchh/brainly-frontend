import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-dvh w-dvw  bg-gradient-to-b from-shadow-green-950 via-teal-950 to-shadow-green-950 font-mono">
        <Header onOpen={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)} />
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex flex-col justify-center w-fit mx-auto   md:flex-row  gap-4 flex-wrap px-4 md:px-10">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
