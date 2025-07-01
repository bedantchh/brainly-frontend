interface InputProps{
    label: string;
    type?: string;
    refrence?: any;
}
const Input = ({label,type,refrence}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 text-white">
    <label>{label}</label>
    <input className="p-2 bg-shadow-green-950 rounded-xl outline-none focus:ring-1 focus:ring-slate-400" ref={refrence} type={type} />
    </div>
  )
}

export default Input