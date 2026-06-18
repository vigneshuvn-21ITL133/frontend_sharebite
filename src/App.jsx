import { Routes, Route } from "react-router-dom";
// import Login from './components/Login'
// import Signup from "./components/Signup";
// import Home from "./pages/Home";
// import Aboutpage from "./pages/Aboutpage";
// import Forget from "./components/Forget";
// import Howitworks from "./pages/Howitworks";
// import Impact from "./pages/Impact";
import BrowseDonations from "./pages/clientdashboard/BrowseDonations";
import DonationDetails from "./pages/clientdashboard/Donationdetails";
import Dashboard from "./pages/clientdashboard/Dashboard";

export default function App() {
  return (
      <>
     <Routes>
     <Route path="/" element={<Dashboard />} />
  <Route path="/Browsedonation" element={<BrowseDonations />} />
  {/* <Route path="/about" element={<Aboutpage />} />
  <Route path="/impact" element={<Impact />} />
  <Route path="/howitworks" element={<Howitworks />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/forgetpassword" element={<Forget />} /> */}
  <Route path="/donation/:id" element={<DonationDetails />} />
</Routes>
      </>
  );
}



