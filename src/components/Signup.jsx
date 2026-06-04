import '../styles/Signup.css'


export default function Signup() {
    return (
        <div>
            <div className="login-container">
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
                        <button className="signup-btn" type="submit">Sign up</button>
                    </div>
                    <div className="login-content">
                        <span>Already have an account? <a href="Login.html">Login</a></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
