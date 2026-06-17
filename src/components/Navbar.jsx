import '../styles/Navbar.css'
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="navbar-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" width={180} height={150}/>
      </div>
      <nav className="nav-menu">
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/donation">Donations</Link>
        <Link className="navlink" to="/request">Requests</Link>
        <Link className="navlink" to="/howitworks">How it works</Link>
        <Link className="navlink" to="/impact">Impact</Link>
        <Link className="navlink" to="/about">About us</Link>
        <Link className="navlink" to="/contact">Contact</Link>
      </nav>
      <nav className="button-container">
        <Link className="login-btn" to="/login">Log in</Link>
        <Link className="signup-btn" to="/signup">Sign up</Link>
      </nav>
    </div>
    </>
  );
}