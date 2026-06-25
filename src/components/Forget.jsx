import '../styles/Forget.css'
import { Link } from 'react-router-dom'
import { forgotPassword } from "../services/authService";
import { useState } from 'react';
import { toast } from 'react-toastify';
function Forget() {


  const [email, setEmail] = useState("");
  const [Loading,setLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true)
    try {

      const res =
        await forgotPassword(email);

      toast.info(res.data.message);

    } catch (error) {

      toast.error(
        error.response?.data?.error
      );
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div>
    <div className="forget-container">
        <h1>Forget Password 🔒</h1>
        <p>No worries Enter Your Email and <br/>we'll send you a reset link.</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label><br/>
                <input 
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }/><br/>
            </div>
            <div>
            <button type="submit" className="forget-reset-btn">
              {
                Loading ? "Sending":"Send Rest Link"
              }
            </button>
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
