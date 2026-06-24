import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../services/authService";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // If already logged in, go to Dashboard
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await loginUser({
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem(
        "access_token",
        response.data.access
      );

      localStorage.setItem(
        "refresh_token",
        response.data.refresh
      );

      alert("Login Successful!");

      navigate("/");
    } catch (error) {
      console.error(error);

      if (error.response?.data?.detail) {
        alert("Login failed. Please check your credentials.");
      } else {
        alert("Invalid Username or Password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back! 👋</h1>
      <p>Login to continue</p>

      <form onSubmit={handleLogin}>
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
          <label>Password</label>
          <br />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="Forgetpassword">
          <Link to="/forgetpassword">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="login-button"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <div style={{ marginTop: "15px" }}>
          <span>
            Don't have an account?{" "}
            <Link
              className="registerlink"
              to="/register"
            >
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}