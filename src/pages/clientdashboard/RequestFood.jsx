import "../../styles/RequestFood.css";
import { useParams } from "react-router-dom";




function RequestFood() {
  const { id } = useParams();

  return (
    <div className="request-container">

      <div className="request-card">

        <div className="request-header">
          <h1>Request Food</h1>
          <p>Complete the form below to request this donation.</p>
        </div>

        <form className="request-form">

          <div className="form-group">
            <label>Donation ID</label>
            <input
              type="text"
              value={id}
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Organization / Receiver Name</label>
            <input
              type="text"
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              placeholder="Enter mobile number"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Required Quantity</label>
            <input
              type="number"
              placeholder="Example: 5 packs"
            />
          </div>

          <div className="form-group">
            <label>Pickup Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Pickup Time</label>
            <input type="time" />
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              rows="4"
              placeholder="Any special requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Request
          </button>

        </form>

      </div>

    </div>
  );
}

export default RequestFood;