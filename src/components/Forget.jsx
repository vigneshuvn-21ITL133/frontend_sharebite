import '../styles/Forget.css'
import { Link } from 'react-router-dom'

function Forget() {
  return (
    <div>
    <div class="forget-container">
        <Link to='/forgetpassword'></Link>
        <h1>Forget Password 🔒</h1>
        <p>No worries Enter Your Email and <br/>we'll send you a reset link.</p>
        <form>
            <div>
                <label>Email</label><br/>
                <input type="text" aria-placeholder="Enter Email" required /><br/>
            </div>
            <div>
                <button class="forget-reset-btn">Send Reset Link</button>
            </div>
            <div class="forget-login-content">
                <span><Link to="/login">Back to Login</Link></span>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Forget
