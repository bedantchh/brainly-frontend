import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";


const SignUp = () => {
  const BACKEND_URL= import.meta.env.VITE_BACKEND_URL
  const userNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  async function submit(){
    const username = userNameRef.current?.value
    const password = passwordRef.current?.value
    console.log(username,password)
    await axios.post(`${BACKEND_URL}/api/v1/signup`,{username,password})
  }

  return <div className="flex justify-center items-center h-full">
    <div className="rounded-2xl bg-gradient-to-b from-shadow-green-700 via-teal-900 to-shadow-green-700 shadow-2xl p-4 flex flex-col items-center gap-6  min-w-xs md:min-w-sm">
        <h1 className="text-white font-bold text-2xl ">Sign Up</h1>
        <div className="flex flex-col gap-4 w-full">
            <Input refrence={userNameRef} label="Username" type="email"/>
            <Input refrence={passwordRef} label="Password" type="password"/>
        </div>
        <Button onClick={submit} text="Sign Up"/>
    </div>
  </div>;
};

export default SignUp;
