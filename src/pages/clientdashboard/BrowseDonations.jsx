import "../../styles/BrowseDonations.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDonations } from "../../services/donationservice";
import { Link } from "react-router-dom";

function BrowseDonations() {
  const navigate = useNavigate();

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadDonations();
  }, []);

  const loadDonations = async () => {
    try {
      const response = await getDonations();

      console.log(response.data);

      setDonations(response.data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    } finally {
      setLoading(false);
    }
  };

  // Category Filter + Search Filter
  const filteredDonations = donations.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.food_type === selectedCategory;

    const matchesSearch =
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.donor_name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-container">

      {/* Header */}
      <Link to="Browsedonation"></Link>
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
                  src={item.images.image}
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