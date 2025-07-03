import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import ToggleButtons from "./ToggleButtons";
import axios from "axios";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitSuccess: ()=> void
}

const Modal = ({ open, onClose,onSubmitSuccess }: ModalProps) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [isSelected, setSelected] = useState("youtube");
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);
  async function handleSubmit() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = isSelected;
    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          title: title,
          link: link,
          type: type,
        },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      onSubmitSuccess()
      onClose()
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      {open ? (
        <div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center backdrop-blur-xs">
          <div
            ref={modalRef}
            className="p-4 rounded-2xl bg-gradient-to-b from-shadow-green-700 via-teal-900 to-shadow-green-700 min-w-xs md:min-w-md text-shadow-green-50"
          >
            <div className="flex justify-between">
              <h1 className="mb-4 font-bold text-2xl ">Add New Content</h1>
              <p className="cursor-pointer" onClick={onClose}>
                X
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Input reference={titleRef} label="Title" type="text" />
              <Input reference={linkRef} label="Link" type="text" />
              <div className="flex gap-4 items-center">
                <p>Content Type:</p>
                <div className="flex gap-1 rounded-xl bg-shadow-green-950 p-1.5">
                  <ToggleButtons
                    onClick={() => setSelected("youtube")}
                    active={isSelected === "youtube"}
                    text="Youtube"
                  />
                  <ToggleButtons
                    onClick={() => setSelected("twitter")}
                    active={isSelected === "twitter"}
                    text="Twitter"
                  />
                </div>
              </div>
              <Button onClick={handleSubmit} text="Add Memory" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
