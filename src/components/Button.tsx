type ButtonProps = {
  text: string;
  onClick?: any
};

const Button = ({ text,onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-gray-400 text-white px-4 py-2 rounded-xl cursor-pointer hover:px-5 hover:rounded-lg hover:bg-gray-500 transform transition-all">{text}</button>
  )
}

export default Button