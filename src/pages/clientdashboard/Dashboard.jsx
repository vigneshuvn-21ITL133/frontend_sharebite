import "../../styles/dashboard.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dash-container">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="dash-logo">
          <img src={Logo} alt="logo" width={250} height={130} />
        </div>

        <nav className="dash-menu">
          <Link className="dash-menu-items">Dashboard</Link>
          <Link to="/Browsedonation" className="dash-menu-items">
            Browse Donations
          </Link>
          <Link to="/myrequest" className="dash-menu-items">
            My Requests
          </Link>
          <Link to="/Activepickups" className="dash-menu-items">
            Active Pickups
          </Link>
          <Link to="/messages" className="dash-menu-items">
            Messages
          </Link>
          <Link to="/notifictions" className="dash-menu-items">
            Notifications
          </Link>
          <Link to="/myimpact" className="dash-menu-items">
            My Impact
          </Link>
          <Link to="/profile" className="dash-menu-items">
            Profile
          </Link>
          <Link className="dash-menu-items">Settings</Link>
          <Link className="dash-menu-items">Help & Support</Link>
        </nav>
        <div className="dashboard-login-container">
          <button className="dash-logout-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#666666"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
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
            <span>Bangalore, Karnataka</span>
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="dash-profile-img"
            />
          </div>
        </header>

        {/* Welcome */}
        <section className="dash-welcome">
          <h1>Welcome back, Ananya! 👋</h1>
          <p>Let's make a difference today.</p>
        </section>

        {/* Stats */}
        <section className="dash-stats-grid">
          <div className="dash-stat-card">
            <h2>12</h2>
            <p>Available Donations</p>
          </div>

          <div className="dash-stat-card">
            <h2>5</h2>
            <p>My Requests</p>
          </div>

          <div className="dash-stat-card">
            <h2>2</h2>
            <p>Active Pickups</p>
          </div>

          <div className="dash-stat-card">
            <h2>620 kg</h2>
            <p>CO₂ Saved</p>
          </div>
        </section>

        {/* Recommended Donations */}
        <section className="dash-card-section">
          <div className="dash-section-header">
            <h2>Recommended Donations</h2>
            <a href="/">View All</a>
          </div>

          <div className="dash-donation-grid">
            <div className="dash-donation-card">
              <img
                src="https://images.unsplash.com/photo-1512058564366-18510be2db19"
                alt=""
              />
              <h3>Veg Pulao (10 packs)</h3>
              <p>2 km away</p>
            </div>

            <div className="dash-donation-card">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf"
                alt=""
              />
              <h3>Fresh Fruits</h3>
              <p>3 km away</p>
            </div>

            <div className="dash-donation-card">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
                alt=""
              />
              <h3>Bread & Buns</h3>
              <p>4 km away</p>
            </div>

            <div className="dash-donation-card">
              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
                alt=""
              />
              <h3>Mixed Veg Curry</h3>
              <p>2 km away</p>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="dash-bottom-grid">
          <div className="dash-activity-card">
            <h2>Recent Activity</h2>

            <ul>
              <li>Request for Veg Pulao accepted</li>
              <li>Pickup scheduled for May 18</li>
              <li>New message from donor</li>
            </ul>
          </div>

          <div className="dash-impact-card">
            <h2>Your Impact</h2>

            <div className="dash-impact-item">
              <span>Meals Shared</span>
              <strong>32</strong>
            </div>

            <div className="dash-impact-item">
              <span>CO₂ Saved</span>
              <strong>620 kg</strong>
            </div>

            <div className="dash-impact-item">
              <span>People Helped</span>
              <strong>840</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
