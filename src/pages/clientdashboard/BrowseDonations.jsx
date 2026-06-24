import "../../styles/BrowseDonations.css";
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDonation } from "../../services/donationservice";

function BrowseDonations() {
  const navigate = useNavigate();

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const loadDonations = async () => {
    try {
      const response = await getDonation();
      setDonations(response.data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDonations();
  }, []);



  // Category Filter + Search Filter
  const filteredDonations = Array.isArray(donations)
  ? donations.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" ||
        item.food_type === selectedCategory;

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        (item.title || "")
          .toLowerCase()
          .includes(search) ||
        (item.address || "")
          .toLowerCase()
          .includes(search) ||
        (item.donor_name || "")
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    })
  : [];

  
  return (
    <div className="browse-container">

      {/* Header */}
      <Link to="/Browsedonation"></Link>
      <div className="browse-header">
        <h2>Browse Donations</h2>
        
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search food, donor or location..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          <button className="filter-btn">
            Search
          </button>
        </div>
      </div>

      {/* Categories */}

      <div className="category-row">

        <button
          className={
            selectedCategory === "all"
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory("all")
          }
        >
          All
        </button>

        <button
          className={
            selectedCategory === "cooked"
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory("cooked")
          }
        >
          Cooked Food
        </button>

        <button
          className={
            selectedCategory === "fruits"
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory("fruits")
          }
        >
          Fruits & Veg
        </button>

        <button
          className={
            selectedCategory === "packaged"
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory("packaged")
          }
        >
          Packaged Food
        </button>

        <button
          className={
            selectedCategory === "bakery"
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory("bakery")
          }
        >
          Bakery
        </button>

        <button
          className={
            selectedCategory === "beverage"
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory("beverage")
          }
        >
          Beverages
        </button>

      </div>

      {/* Donation Cards */}

      {loading ? (
        <p className="loading-text">
          Loading donations...
        </p>
      ) : (
        <div className="donation-list">

          {filteredDonations.length > 0 ? (
            filteredDonations.map((item) => (
              <div
                className="donation-card"
                key={item.id}
              >

                {/* Image */}

                <img
                    src={ item.images?.length > 0
                      ? item.images[0].image
                      : "/placeholder-food.jpg"}
                  alt={item.title}
                />

                {/* Info */}

                <div className="donation-info">

                  <div className="title-row">
                    <h3>{item.title}</h3>

                    <span className="badge">
                      {item.food_type}
                    </span>
                  </div>

                  <p>
                    <strong>Donor:</strong>{" "}
                    {item.donor_name || "Unknown"}
                  </p>

                  <p>
                    <strong>Address:</strong>{" "}
                    {item.address}
                  </p>

                  <p>
                    <strong>Quantity:</strong>{" "}
                    {item.quantity}
                  </p>

                  <p>
                    <strong>Expiry:</strong>{" "}
                    {new Date(
                      item.expiry_time
                    ).toLocaleString()}
                    
                  </p>

                </div>

                {/* Button */}

                <button
                  className="view-btn"
                  onClick={() =>
                    navigate(
                      `/donation/${item.id}`
                    )
                  }
                >
                  View Details
                </button>

              </div>
            ))
          ) : (
            <p className="no-data">
              No donations found.
            </p>
          )}

        </div>
      )}

      {/* Pagination */}

      <div className="browser-pagination">
      <Link className="details-backnavigation"to="/dashboard">Back</Link>
        <button>{"<"}</button>

        <button className="current">
          1
        </button>

        <button>2</button>

        <button>3</button>

        <button>{">"}</button>
      </div>
    
    </div>
  );
}

export default BrowseDonations;