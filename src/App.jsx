import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from "./components/Signup";
import Home from "./pages/Home";
// import Aboutpage from "./pages/Aboutpage";
import About from "./components/About";
import Forget from "./components/Forget";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgetpassword" element={<Forget/>}/>
      </Routes>
  );
}



