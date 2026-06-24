import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDonation } from "../../services/donationservice";
import "../../styles/DonateFood.css";

function DonateFood() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    food_type: "cooked",
    quantity: "",
    address: "",
    expiry_time: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("food_type", formData.food_type);
      data.append("quantity", formData.quantity);
      data.append("address", formData.address);
      data.append("expiry_time", formData.expiry_time);

      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
      }

      await createDonation(data);

      alert("Donation created successfully");

      navigate("/Browsedonation");
    } catch (error) {
      console.error(error);
      alert("Unable to create donation");
    }
  };

  return (
    <div className="donate-container">
      <div className="donate-card">
        <h1>Donate Food</h1>

        <p>Share food and help people in need.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Food Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Food Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Food details"
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>Food Type</label>

            <select
              name="food_type"
              value={formData.food_type}
              onChange={handleChange}
            >
              <option value="cooked">Cooked Food</option>

              <option value="fruits">Fruits & Vegetables</option>

              <option value="bakery">Bakery</option>

              <option value="packaged">Packaged Food</option>

              <option value="beverage">Beverages</option>
            </select>
          </div>    

          <div className="form-group">
            <label>Quantity</label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Address</label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label>Expiry Date & Time</label>

            <input
              type="datetime-local"
              name="expiry_time"
              value={formData.expiry_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Images</label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="donate-btn">
            Donate Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonateFood;
