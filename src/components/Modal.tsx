import Button from "./Button";
import Input from "./Input";

const Modal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-xs">
      <div className="p-4 rounded-2xl bg-slate-300">
        <div className="flex justify-between">
          <h1 className="mb-4 ">Add New Content</h1>
          <p className="cursor-pointer">X</p>
        </div>
        <div className="flex flex-col gap-2">
        <Input label="Title" type="text" />
        <Input label="Link" type="text" />
        <Button text="Add Memory" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
