import { useRef, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  if (!BACKEND_URL) {
    throw new Error("VITE_BACKEND_URL is not set in the environment variables.");
  }
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);

  async function submit() {
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
      if(!username || !password) {
        setError(true)
        return
      }
      await axios.post(`${BACKEND_URL}/api/v1/signup`, { username, password });
      setSuccess(true)
      setTimeout(()=>{
        navigate("/signin")
      },1500)
      
    } catch (e) {
      console.error(e);
      setError(true)
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="rounded-2xl bg-gradient-to-b from-shadow-green-700 via-teal-900 to-shadow-green-700 shadow-2xl p-4 flex flex-col items-center gap-6  min-w-xs md:min-w-sm">
        <h1 className="text-white font-bold text-2xl ">Sign Up</h1>
        <div className="flex flex-col gap-4 w-full">
          <Input reference={usernameRef} label="Username" type="email" required/>
          <Input reference={passwordRef} label="Password" type="password" required />
          {error ?  <span className="text-red-400 text-xs self-center">Try Again with valid Username and Password.</span> : null }
          {success ? <span className="text-green-400 text-xs self-center">Sign Up successful!</span> : null }
       
        </div>
        <Button onClick={submit} text="Sign Up" />
      </div>
    </div>
  );
};

export default SignUp;
