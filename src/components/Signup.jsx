import '../styles/Signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div>
            <div className="signup-container">
                <h1>Create account? 🌿</h1>
                <p>Join us and make an impact</p>
                <form>
                    <div>
                        <label>Full Name</label>
                        <br />
                        <input type="text" placeholder="Enter the Full Name" required />
                        <br />
                    </div>
                    <div>
                        <label>Email or Phone</label>
                        <br />
                        <input type="text" placeholder="Enter the Email" required />
                        <br />
                    </div>
                    <div>
                        <label>password</label>
                        <br />
                        <input type="password" placeholder="Create password" required />
                        <br />
                    </div>
                    <div>
                        <label>Confirm password</label>
                        <br />
                        <input type="password" placeholder="Confirm password" required />
                        <br />
                    </div>
                    <div className="check">
                        <input type="checkbox" required id="checkboxsize" />
                        <p>I agree to the <span>Terms & condition</span> and <span> privacy policy</span></p>
                        <br />
                    </div>
                    <div>
                        <button className="signup-button" type="submit">Sign up</button>
                    </div>
                    <div className="login-navigation-content">
                        <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
