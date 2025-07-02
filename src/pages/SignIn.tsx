import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router";


const SignIn = () => {
  const BACKEND_URL= import.meta.env.VITE_BACKEND_URL
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  async function submit(){
    try{
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    const response = await axios.post<{token:string}>(`${BACKEND_URL}/api/v1/signin`,{username,password})
    const jwt = response.data?.token
    if(jwt){
      localStorage.setItem("token",jwt)
      navigate("/dashboard")
    }
    }catch(e){
      console.error(e);
    }
  }

  return <div className="flex justify-center items-center h-full">
    <div className="rounded-2xl bg-gradient-to-b from-shadow-green-700 via-teal-900 to-shadow-green-700 shadow-2xl p-4 flex flex-col items-center gap-6  min-w-xs md:min-w-sm">
        <h1 className="text-white font-bold text-2xl ">Sign in</h1>
        <div className="flex flex-col gap-4 w-full">
            <Input reference={usernameRef} label="Username" type="email"/>
            <Input reference={passwordRef} label="Password" type="password"/>
        </div>
        <Button onClick={submit} text="Sign In"/>
    </div>
  </div>;
};

export default SignIn;
