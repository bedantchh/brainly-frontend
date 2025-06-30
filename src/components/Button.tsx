type ButtonProps = {
  text?: string;
  onClick?: ()=> void;
  svg?:React.ReactNode
};

const Button = ({ text,onClick,svg }: ButtonProps) => {
  return (
    <button onClick={onClick} className="flex justify-center items-center gap-2 bg-shadow-green-200 text-shadow-green-950 px-4 py-2 rounded-2xl cursor-pointer hover:scale-105 hover:rounded-xl hover:bg-shadow-green-500 hover:text-shadow-green-50 transform transition-all">{svg}{text}</button>
  )
}

export default Button