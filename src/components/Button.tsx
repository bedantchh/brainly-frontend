type ButtonProps = {
  text: string;
  onClick?: ()=> void;
  svg?:React.ReactNode
};

const Button = ({ text,onClick,svg }: ButtonProps) => {
  return (
    <button onClick={onClick} className="flex justify-between gap-2 bg-gray-400 text-white px-4 py-2 rounded-xl cursor-pointer hover:scale-105 hover:rounded-lg hover:bg-gray-500 transform transition-all">{svg}{text}</button>
  )
}

export default Button