import '../styles/Forget.css'
import { Link } from 'react-router-dom'

function Forget() {
  return (
    <div>
    <div className="forget-container">
        <h1>Forget Password 🔒</h1>
        <p>No worries Enter Your Email and <br/>we'll send you a reset link.</p>
        <form>
            <div>
                <label>Email</label><br/>
                <input type="text" placeholder="Enter Email" required /><br/>
            </div>
            <div>
            <button className="forget-reset-btn">Send Reset Link</button>
            </div>
            <div className="forget-login-content">
                <span><Link to="/login">Back to Login</Link></span>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Forget
