import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {

  return (
    <div className="h-dvh w-dvw overflow-y-scroll bg-gradient-to-b from-shadow-green-950 via-teal-950 to-shadow-green-950 font-mono">
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
