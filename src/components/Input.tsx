interface InputProps{
    label: string;
    type?: string;
    reference?: any;
    required?: boolean;
}
const Input = ({label, type = "text", reference, required}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 text-white">
    <label>{label}</label>
    <input className="p-2 bg-shadow-green-950 rounded-xl outline-none focus:ring-1 focus:ring-slate-400" required={required}  ref={reference} type={type} />
    </div>
  )
}

export default Input