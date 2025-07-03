type ButtonProps = {
  text?: string;
  onClick?: ()=> void;
  svg?:React.ReactNode;
  active?: boolean;
};
const ToggleButtons = ({ text,onClick,svg,active }: ButtonProps) => {
  return (

    <button onClick={onClick} className={`flex justify-center items-center gap-2  px-2 py-1 rounded-lg cursor-pointer ${active ? "bg-shadow-green-600 text-shadow-green-50" : null} transform transition-all`}>{svg}{text}</button>
  )
}

export default ToggleButtons