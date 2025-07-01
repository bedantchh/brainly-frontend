import Button from "../components/Button";
import Input from "../components/Input";


const SignIn = () => {
  return <div className="flex justify-center items-center h-full">
    <div className="rounded-2xl bg-gradient-to-b from-shadow-green-700 via-teal-900 to-shadow-green-700 shadow-2xl p-4 flex flex-col items-center gap-6  min-w-xs md:min-w-sm">
        <h1 className="text-white font-bold text-2xl ">Sign in</h1>
        <div className="flex flex-col gap-4 w-full">
            <Input label="Username" type="email"/>
            <Input label="Password" type="password"/>
        </div>
        <Button text="Sign In"/>
    </div>
  </div>;
};

export default SignIn;
