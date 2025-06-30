interface InputProps{
    label: string;
    type?: string;
}
const Input = ({label,type}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
    <label>{label}</label>
    <input className="p-2 bg-shadow-green-950 rounded-xl outline-none focus:ring-1 focus:ring-slate-400" type={type} />
    </div>
  )
}

export default Input