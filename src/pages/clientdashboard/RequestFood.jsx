import "../../styles/RequestFood.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { createRequest } from "../../services/requestService";

function RequestFood() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    organization_name: "",
    contact_number: "",
    email: "",
    quantity_requested: "",
    pickup_date: "",
    pickup_time: "",
    notes: "",
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // if(formData.quantity_requested.length >10){
  //   alert("Number only in 10 digits")
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        donation: id,
        quantity_requested: formData.quantity_requested,
        pickup_date: formData.pickup_date,
        pickup_time: formData.pickup_time,
        notes: formData.notes,
      };

      await createRequest(requestData);

      alert("Food request submitted successfully!");

      navigate("/myrequest");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
          "Failed to submit request"
      );
    }
  };

  return (
    <div className="request-container">
      <div className="request-card">
      <Link to="/request"></Link>
        <div className="request-header">
          <h1>Request Food</h1>
          <p>
            Complete the form below to request this donation.
          </p>
        </div>

        <form
          className="request-form"
          onSubmit={handleSubmit}
        >

          <div className="request-form-group">
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
              name="organization_name"
              value={formData.organization_name}
              onChange={handleChange}
              placeholder="Enter organization name"
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Required Quantity</label>
            <input
              type="number"
              name="quantity_requested"
              value={formData.quantity_requested}
              onChange={handleChange}
              placeholder="Enter quantity"
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Date</label>
            <input
              type="date"
              name="pickup_date"
              value={formData.pickup_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Time</label>
            <input
              type="time"
              name="pickup_time"
              value={formData.pickup_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              rows="4"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requirements..."
            />
          </div>

          <button
            type="submit"
            className="request-submit-btn"
          >
            Submit Request
          </button>

        </form>

      </div>
    </div>
  );
}

export default RequestFood;