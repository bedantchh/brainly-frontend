import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-dvh w-dvw  bg-gray-900 font-mono">
        <Header onOpen={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)} />
        <div className="max-w-5xl mx-auto mt-12">
          <div className="flex gap-4 flex-wrap px-4 md:px-10">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
