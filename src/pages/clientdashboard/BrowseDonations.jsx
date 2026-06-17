import "../../styles/BrowseDonations.css";
import { useNavigate } from "react-router-dom";

const donations = [
  {
    id: 1,
    image: "/images/pulao.jpg",
    title: "Veg Pulao (10 packs)",
    donor: "Hotel GreenPark",
    location: "Indiranagar, Bangalore",
    distance: "2 km away",
    badge: "Cooked Food",
  },
  {
    id: 2,
    image: "/images/banana.jpg",
    title: "Fresh Bananas (20 kg)",
    donor: "Fresh Mart",
    location: "Koramangala, Bangalore",
    distance: "3 km away",
    badge: "Fruits & Veg",
  },
  {
    id: 3,
    image: "/images/bread.jpg",
    title: "Bread & Buns",
    donor: "Bake House",
    location: "HSR Layout, Bangalore",
    distance: "4 km away",
    badge: "Bakery",
  },
  {
    id: 4,
    image: "/images/curry.jpg",
    title: "Veg Curry (15 packs)",
    donor: "MG Road Hotel",
    location: "MG Road, Bangalore",
    distance: "1.8 km away",
    badge: "Cooked Food",
  },
];

function BrowseDonations() {
    const navigate = useNavigate();
  return (
    <div className="browse-container">
      {/* Header */}

      <div className="browse-header">
        <h2>Browse Donations</h2>

        <div className="search-filter">
          <input
            type="text"
            placeholder="Search food, donor or location..."
          />

          <button className="filter-btn">
            Filter
          </button>
        </div>
      </div>

      {/* Categories */}

      <div className="category-row">
        <button className="active">All</button>
        <button>Cooked Food</button>
        <button>Fruits & Veg</button>
        <button>Packaged Food</button>
        <button>Bakery</button>
        <button>Beverages</button>
      </div>

      {/* Donation Cards */}

      <div className="donation-list">
        {donations.map((item) => (
          <div className="donation-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="donation-info">
              <div className="title-row">
                <h3>{item.title}</h3>

                <span className="badge">
                  {item.badge}
                </span>
              </div>

              <p>{item.donor}</p>
              <p>{item.location}</p>
              <p>{item.distance}</p>
            </div>

            <button
  className="view-btn"
  onClick={() => navigate(`/donation/${item.id}`)}
>
  View Details
</button>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="browser-pagination">
        <button>{"<"}</button>

        <button className="current">1</button>

        <button>2</button>

        <button>3</button>

        <button>{">"}</button>
      </div>
    </div>
  );
}

export default BrowseDonations;