import "../../styles/dashboard.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [stats, setStats] = useState({
    available_donations: 0,
    my_requests: 0,
    active_pickups: 0,
    co2_saved: 0,
    meals_shared: 0,
    people_helped: 0,
  });

  const [donations, setDonations] = useState([]);
  const [activities, setActivities] = useState([]);

  const token = localStorage.getItem("access_token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };


  useEffect(() => {
    loadDashboard();
  }, []);


  const loadDashboard = async () => {
    try {
      // User Profile
      const profileRes = await axios.get(
        "http://127.0.0.1:8000/api/auth/profile",
        { headers }
      );

      setProfile(profileRes.data);

      // Donations
      const donationRes = await axios.get(
        "http://127.0.0.1:8000/api/donations/",
        { headers }
      );

      const donationData = Array.isArray(donationRes.data)
        ? donationRes.data
        : donationRes.data.results || [];

      setDonations(donationData);
      console.log(donationData)
      // Requests
      const requestRes = await axios.get(
        "http://127.0.0.1:8000/api/requests/",
        { headers }
      );

      const requestData = Array.isArray(requestRes.data)
        ? requestRes.data
        : requestRes.data.results || [];

      setActivities(requestData);

      // Calculate Stats
      setStats({
        available_donations: donationData.length,
        my_requests: requestData.length,
        active_pickups: requestData.filter(
          (r) => r.status === "accepted"
        ).length,
        co2_saved: donationData.length * 5,
        meals_shared: donationData.length * 2,
        people_helped: donationData.length * 10,
      });
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        navigate("/login");
      }
    }
  };


  

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    navigate("/login");
  };

  return (
    <div className="dash-container">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="dash-logo">
          <img
            src={Logo}
            alt="logo"
            width={250}
            height={130}
          />
        </div>

        <nav className="dash-menu">
          <Link className="dash-menu-items" to="/dashboard">
            Dashboard
          </Link>

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
            to="/Activepickups"
            className="dash-menu-items"
          >
            Active Pickups
          </Link>

          <Link
            to="/messages"
            className="dash-menu-items"
          >
            Messages
          </Link>

          <Link
            to="/notifications"
            className="dash-menu-items"
          >
            Notifications
          </Link>

          <Link
            to="/myimpact"
            className="dash-menu-items"
          >
            My Impact
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
            className="dash-logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dash-main-content">
        {/* Navbar */}
        <header className="dash-navbar">
          <input
            type="text"
            placeholder="Search donations..."
            className="dash-search-bar"
          />

          <div className="dash-profile-section">
            <span>
              {profile.address || "Tamil Nadu"}
            </span>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="dash-profile-img"
            />
          </div>
        </header>

        {/* Welcome */}
        <section className="dash-welcome">
          <h1>
            Welcome back,
            {" "}
            {profile.first_name ||
              profile.username ||
              "User"}
            👋
          </h1>

          <p>
            Let's make a difference today.
          </p>
        </section>

        {/* Stats */}
        <section className="dash-stats-grid">
          <div className="dash-stat-card">
            <h2>
              {stats.available_donations}
            </h2>
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
            <h2>
              {stats.co2_saved} kg
            </h2>
            <p>CO₂ Saved</p>
          </div>
        </section>

        {/* Donations */}
        <section className="dash-card-section">
          <div className="dash-section-header">
            <h2>
              Recommended Donations
            </h2>

            <Link to="/Browsedonation">
              View All
            </Link>
          </div>

          <div className="dash-donation-grid">
            {donations
              .slice(0, 4)
              .map((item) => (
                <div
                  className="dash-donation-card"
                  key={item.id}
                >
                  <img
                    src={
                      item.images?.length > 0
                        ? `http://127.0.0.1:8000${item.images[0].image}`
                        : "/placeholder-food.jpg"
                    }
                    alt={item.title}
                  />

                  <h3>{item.title}</h3>

                  <p>{item.address}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Bottom Section */}
        <section className="dash-bottom-grid">
          <div className="dash-activity-card">
            <h2>Recent Activity</h2>

            <ul>
              {activities
                .slice(0, 5)
                .map((item) => (
                  <li key={item.id}>
                    Donation #{item.donation}
                    {" "}
                    -
                    {" "}
                    {item.status}
                  </li>
                ))}
            </ul>
          </div>

          <div className="dash-impact-card">
            <h2>Your Impact</h2>

            <div className="dash-impact-item">
              <span>
                Meals Shared
              </span>

              <strong>
                {stats.meals_shared}
              </strong>
            </div>

            <div className="dash-impact-item">
              <span>
                CO₂ Saved
              </span>

              <strong>
                {stats.co2_saved} kg
              </strong>
            </div>

            <div className="dash-impact-item">
              <span>
                People Helped
              </span>

              <strong>
                {stats.people_helped}
              </strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;