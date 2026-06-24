import "../../styles/dashboard.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProfile } from "../../services/authService";
import { getDonation } from "../../services/donationservice";
import { getMyRequests } from "../../services/requestService";

function Dashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({});
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);

  const [stats, setStats] = useState({
    available_donations: 0,
    my_requests: 0,
    active_pickups: 0,
    meals_shared: 0,
    people_helped: 0,
    co2_saved: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const profileRes = await getProfile();
      setProfile(profileRes.data);

      const donationRes = await getDonation();

      const donationData = Array.isArray(donationRes.data)
        ? donationRes.data
        : donationRes.data.results || [];

      setDonations(donationData);

      const requestRes = await getMyRequests();

      const requestData = Array.isArray(requestRes.data)
        ? requestRes.data
        : requestRes.data.results || [];

      setRequests(requestData);

      setStats({
        available_donations: donationData.length,
        my_requests: requestData.length,
        active_pickups: requestData.filter(
          (item) => item.status === "accepted"
        ).length,
        meals_shared: donationData.length * 5,
        people_helped: donationData.length * 10,
        co2_saved: donationData.length * 3,
      });
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dash-container">

      {/* Sidebar */}
      <aside className="dash-sidebar">

        <div className="dash-logo">
          <img
            src={Logo}
            alt="ShareBite"
            width={220}
          />
        </div>

        <nav className="dash-menu">

          <Link
            to="/dashboard"
            className="dash-menu-items"
          >
            Dashboard
          </Link>

          {profile.role === "donor" && (
            <Link
              to="/donatefood"
              className="dash-menu-items"
            >
              Donate Food
            </Link>
          )}

          <Link
            to="/Browsedonation"
            className="dash-menu-items"
          >
            Browse Donations
          </Link>

          <Link
            to="/myrequest"
            className="dash-menu-items"
          >
            My Requests
          </Link>

          <Link
            to="/profile"
            className="dash-menu-items"
          >
            Profile
          </Link>

        </nav>

        <div className="dashboard-login-container">
          <button
            onClick={handleLogout}
            className="dash-logout-btn"
          >
            Logout
          </button>
        </div>

      </aside>

      {/* Main */}
      <main className="dash-main-content">

        <header className="dash-navbar">

          <input
            type="text"
            placeholder="Search donations..."
            className="dash-search-bar"
          />

          <div className="dash-profile-section">

            <span className="dash-role">
              {profile.role}
            </span>

            <img
              src="/default-avatar.png"
              alt="profile"
              className="dash-profile-img"
            />

          </div>

        </header>

        <section className="dash-welcome">

          <h1>
            Welcome Back,
            {" "}
            {profile.username}
            👋
          </h1>

          <p>
            Together we can reduce food waste and help people.
          </p>

        </section>

        <section className="dash-stats-grid">

          <div className="dash-stat-card">
            <h2>{stats.available_donations}</h2>
            <p>Available Donations</p>
          </div>

          <div className="dash-stat-card">
            <h2>{stats.my_requests}</h2>
            <p>My Requests</p>
          </div>

          <div className="dash-stat-card">
            <h2>{stats.active_pickups}</h2>
            <p>Active Pickups</p>
          </div>

          <div className="dash-stat-card">
            <h2>{stats.meals_shared}</h2>
            <p>Meals Shared</p>
          </div>

          <div className="dash-stat-card">
            <h2>{stats.people_helped}</h2>
            <p>People Helped</p>
          </div>

          <div className="dash-stat-card">
            <h2>{stats.co2_saved}kg</h2>
            <p>CO₂ Saved</p>
          </div>

        </section>

        {/* Donations */}

        <section className="dash-card-section">

          <div className="dash-section-header">

            <h2>Latest Donations</h2>

            <Link to="/Browsedonation">
              View All
            </Link>

          </div>

          <div className="dash-donation-grid">

            {donations.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="dash-donation-card"
              >

                {item.images?.length > 0 && (
                  <img
                    src={`http://127.0.0.1:8000${item.images[0].image}`}
                    alt={item.title}
                  />
                )}

                <h3>{item.title}</h3>

                <p>{item.food_type}</p>

                <p>{item.quantity} Items</p>

                <p>{item.address}</p>

              </div>
            ))}

          </div>

        </section>

        {/* Requests */}

        <section className="dash-bottom-grid">

          <div className="dash-activity-card">

            <h2>Recent Requests</h2>

            <ul>

              {requests.length > 0 ? (
                requests.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    Request #{item.id} - {item.status}
                  </li>
                ))
              ) : (
                <li>No requests available</li>
              )}

            </ul>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;