import { useState } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"

function App() {
const [open,setOpen] = useState(false)
  return (
    <>
    <div className="h-dvh w-dvw bg-gray-900 font-mono">
      <Header onOpen={()=> setOpen(true)}/>
      <Modal open={open} onClose={()=> setOpen(false)}/>
    </div>
    </>
  )
}

export default App
