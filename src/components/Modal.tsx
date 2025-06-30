import { useEffect, useRef } from "react";
import Button from "./Button";
import Input from "./Input";

interface ModalProps{
  open: boolean;
  onClose: ()=> void;
}

const Modal = ({open,onClose}:ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const handleClickOutside = (event: MouseEvent)=>{
      if(modalRef.current && !modalRef.current.contains(event.target as Node)){
        onClose();
      }
    }
    if(open){
        document.addEventListener("mousedown",handleClickOutside);
      }
      
      return ()=> {
        document.removeEventListener("mousedown",handleClickOutside);
      }
  },[open,onClose])
  return (
    <div>
      {open ? <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-xs">
      <div ref={modalRef} className="p-4 rounded-2xl bg-gradient-to-b from-shadow-green-700 via-teal-900 to-shadow-green-700 min-w-xs md:min-w-md text-shadow-green-50">
        <div className="flex justify-between">
          <h1 className="mb-4 font-bold text-2xl ">Add New Content</h1>
          <p className="cursor-pointer" onClick={onClose}>X</p>
        </div>
        <div className="flex flex-col gap-4">
        <Input label="Title" type="text" />
        <Input label="Link" type="text" />
        <Button text="Add Memory" />
        </div>
      </div>
    </div> : null}

    </div>
  );
};

export default Modal;
