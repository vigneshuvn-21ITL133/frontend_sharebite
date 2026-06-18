import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/DonationDetails.css";

function DonationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDonation();
  }, []);

  const loadDonation = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/donations/donations/${id}/`);
      setDonation(response.data);
      // console.log(response.data)
      console.log(donation.images)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!donation) {
    return <h2>Donation Not Found</h2>;
  }



  return (
    <div className="details-container">

      <div className="details-image">

        <img
          src={ donation.images?.length > 0
            ? `http://127.0.0.1:8000${donation.images[0].image}`
            : "/placeholder-food.jpg"}
          alt={donation.title}
        />

      </div>

      <div className="details-content">

        <h1>{donation.title}</h1>

        <p>
          <strong>Donor:</strong>{" "}
          {donation.donor_name}
        </p>

        <p>
          <strong>Address:</strong>{" "}
          {donation.address}
        </p>

        <p>
          <strong>Food Type:</strong>{" "}
          {donation.food_type}
        </p>

        <p>
          <strong>Quantity:</strong>{" "}
          {donation.quantity}
        </p>

        <p>
          <strong>Expiry:</strong>{" "}
          {new Date(
            donation.expiry_time
          ).toLocaleString()}
        </p>

        <p>
          <strong>Description:</strong>{" "}
          {donation.description}
        </p>

        <button
          className="details-request-btn"
          onClick={() =>
            navigate(
              `/request-food/${donation.id}`
            )
          }
        >
          Request Food
        </button>

      </div>

    </div>
  );
}

export default DonationDetails;