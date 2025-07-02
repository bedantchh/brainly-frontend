import { useState } from "react";
import Card from "../components/Card"
import Header from "../components/Header"
import Modal from "../components/Modal"


const Dashboard = () => {
      const [open, setOpen] = useState(false);
  return (
    <>
        <Header onOpen={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)} />
        <div className="max-w-6xl mx-auto mt-12">
          <div className="columns-1 md:columns-2 lg:columns-3 mx-auto gap-4 px-4 md:px-10">
            
            <Card title="Tit le" type="youtube" link="https://www.youtube.com/watch?v=WevY8WuTgJY"/>
            <Card title="Title goes here" type="twitter" link="https://twitter.com/username/status/1939743280599900414"/>
            <Card title="Tit le" type="youtube" link="https://www.youtube.com/watch?v=WevY8WuTgJY"/> 
            <Card title="Tit le" type="youtube" link="https://www.youtube.com/watch?v=WevY8WuTgJY"/> 
          </div>
        </div>
      </>
  )
}

export default Dashboard