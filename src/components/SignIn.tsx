import Button from "./Button";
import Input from "./Input";

const SignIn = () => {
  return <div className="bg-slate-900 h-dvh w-dvw flex justify-center items-center">
    <div className="rounded-2xl bg-slate-600 shadow-2xl p-4 flex flex-col items-center gap-6  max-w-2xs">
        <h1 className="text-white font-bold text-2xl ">Sign in</h1>
        <div className="flex flex-col gap-4">
            <Input label="Username" type="email"/>
            <Input label="Password" type="password"/>
        </div>
        <Button text="Sign In"/>
    </div>
  </div>;
};

export default SignIn;
