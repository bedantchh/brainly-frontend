import { useState } from "react";
import Card from "../components/Card"
import Header from "../components/Header"
import Modal from "../components/Modal"


const Dashboard = () => {
      const [open, setOpen] = useState(false);
  return (
    <div>
        <Header onOpen={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)} />
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex flex-col justify-center w-fit mx-auto md:flex-row  gap-4 flex-wrap px-4 md:px-10">
            <Card title="Hello world" type="twitter" link="https://twitter.com/username/status/1939743280599900414"/>
            <Card title="Hello world" type="youtube" link="https://www.youtube.com/watch?v=WevY8WuTgJY"/>
          </div>
        </div>
      </div>
  )
}

export default Dashboard