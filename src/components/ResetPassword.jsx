import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../services/authService";
import './../styles/Reset.css'
import { toast } from "react-toastify";


function ResetPassword() {

  const { uid, token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      password !== confirmPassword
    ) {
      toast.warning("Passwords do not match");
      return;
    }

    try {

      await resetPassword({
        uid,
        token,
        password,
      });

      toast.success("Password reset successful");

      navigate("/login");

    } catch (error) {

      console.error(error);

      toast.warning(
        error.response?.data?.detail ||
        "Reset failed"
      );

    }
  };

  return (

    <div className="reset-container">
      <div className="reset-card">

        <h1 className="reset-h1">
          Reset Password 👌
        </h1>

        <form className="resetform-container"
          onSubmit={handleSubmit}
        >

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            required
          />
         <div className="reset-btn-container">
          <button type="submit">
            Update Password
          </button>
        </div>
        </form>

      </div>

    </div>

  );
}

export default ResetPassword;