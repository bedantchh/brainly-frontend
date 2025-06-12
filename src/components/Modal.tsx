import Button from "./Button";
import Input from "./Input";

const Modal = ({open,onClose}:any) => {
  return (
    <div>
      {open ? <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-xs">
      <div className="p-4 rounded-2xl bg-slate-300 min-w-xs md:min-w-md">
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
    </div> : <h1>not open</h1>}

    </div>
  );
};

export default Modal;
