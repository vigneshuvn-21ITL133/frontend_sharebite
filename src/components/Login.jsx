import { Link } from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
  return (
    <div>
        <Link to="/login"></Link>
      <div className="login-container">
        <h1>Welcome Back! 👋</h1>
        <p>Login to continue</p>
        <form>
          <div>
            <label>Email or Phone</label><br />
            <input type="text" placeholder="Enter the Email" required /><br />
          </div>
          <div>
            <label>Password</label><br />
            <input type="password" placeholder="Enter the password" required /><br />
          </div>
          <div className="Forgetpassword">
            <a href="Forget.html">Forget password?</a><br /><br />
          </div>
          <div>
            <button type="submit" className="login-btn">Log in</button>
          </div>
          <div>
            <span>Don't have account? <Link to="/signup">signup</Link></span>
          </div>
        </form>
      </div>

    </div>
  )
}
