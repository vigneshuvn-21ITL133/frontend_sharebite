import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();
  


  const [loading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    role: "receiver",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true)

    try {
      await registerUser({
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      console.error(error);

      if (error.response?.data) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Registration Failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Create Account 🌿</h1>
      <p>Join ShareBite and make an impact</p>

      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </div>



         {/* User Role */}
         <div>
          <label>Register As</label>
          <br />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="donor">Donor</option>
            <option value="receiver">Receiver</option>
          </select>
        </div>

        <div className="check">
          <input
            type="checkbox"
            id="checkboxsize"
            required
          />

          <p>
            I agree to the
            <span> Terms & Conditions </span>
            and
            <span> Privacy Policy</span>
          </p>
        </div>

        <button
          type="submit"
          className="register-button"
          disabled={loading}
        >

          {loading ? "Register":"Registered..."}
        </button>

        <div className="login-navigation-content">
          <span>
            Already have an account?
            <Link to="/login"> Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
}