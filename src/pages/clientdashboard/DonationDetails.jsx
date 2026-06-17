import { useParams } from "react-router-dom";
import "../../styles/DonationDetails.css";
import { useNavigate } from "react-router-dom";


const donations = [
  {
    id: 1,
    title: "Veg Pulao (10 packs)",
    donor: "Hotel GreenPark",
    location: "Indiranagar, Bangalore",
    quantity: "10 packs",
    expiry: "2 Hours",
    pickupTime: "12:30 PM",
    description:
      "Freshly prepared veg pulao. Safe for consumption.",
    image: "/images/pulao.jpg",
  },
];

function DonationDetails() {
   const navigate = useNavigate


  const { id } = useParams();

  const donation = donations.find(
    (item) => item.id === Number(id)
  );

  if (!donation) {
    return <h2>Donation Not Found</h2>;
  }

  return (
    <div className="details-container">


     <div className="details-image">
      <img
        src=""
        alt={donation.title}
      />
      </div>

      <div className="details-content">
        <h1>{donation.title}</h1>

        <p>
          <strong>Donor:</strong>
          {donation.donor}
        </p>

        <p>
          <strong>Location:</strong>
          {donation.location}
        </p>

        <p>
          <strong>Quantity:</strong>
          {donation.quantity}
        </p>

        <p>
          <strong>Expiry:</strong>
          {donation.expiry}
        </p>

        <p>
          <strong>Pickup Time:</strong>
          {donation.pickupTime}
        </p>

        <p>
          <strong>Description:</strong>
          {donation.description}
        </p>
        
        <div>
        <button className="details-request-btn"  onClick={() => navigate(`/request-food/${donation.id}`)}>
          Request Food
        </button>
        </div>
      </div>

    </div>
  );
}

export default DonationDetails;