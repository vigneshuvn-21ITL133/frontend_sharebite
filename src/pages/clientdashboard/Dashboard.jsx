// import { Link } from "react-router-dom";
// import "../../styles/Dashboard.css";

// function Dashboard() {
//   return (
//     <div>
//       <div className="dashboard-container">
//         <div className="dashboard-menu-container">
//           <nav>
//             <Link className="dashboard-nav" to="/Dashboard">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
//                 </svg>
//               </span>
//               Dashboard
//             </Link>
//             <Link className="dashboard-nav">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
//                 </svg>
//               </span>
//               Browser Donations
//             </Link>
//             <Link className="dashboard-nav">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M680-40v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v353q-18-11-38-18t-42-11v-324H200v560h280q0 21 3 41t10 39H200Zm148.5-171.5Q360-303 360-320t-11.5-28.5Q337-360 320-360t-28.5 11.5Q280-337 280-320t11.5 28.5Q303-280 320-280t28.5-11.5Zm0-160Q360-463 360-480t-11.5-28.5Q337-520 320-520t-28.5 11.5Q280-497 280-480t11.5 28.5Q303-440 320-440t28.5-11.5Zm0-160Q360-623 360-640t-11.5-28.5Q337-680 320-680t-28.5 11.5Q280-657 280-640t11.5 28.5Q303-600 320-600t28.5-11.5ZM440-440h240v-80H440v80Zm0-160h240v-80H440v80Zm0 320h54q8-23 20-43t28-37H440v80Z" />
//                 </svg>
//               </span>
//               Request
//             </Link>
//             <Link className="dashboard-nav">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M195-195q-35-35-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35q-50 0-85-35Zm442-245h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z" />
//                 </svg>
//               </span>
//               Active pickups
//             </Link>
//             <Link className="dashboard-nav">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
//                 </svg>
//               </span>
//               Messages
//             </Link>
//             <Link className="dashboard-nav">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
//                 </svg>
//               </span>
//               Notification
//             </Link>
//             <Link>
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M342-160h276l40-160H302l40 160Zm0 80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342ZM200-400h560v-80H200v80Zm280-240q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v160q0 33-23.5 56.5T760-320H200q-33 0-56.5-23.5T120-400v-160h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z" />
//                 </svg>
//               </span>
//               My Impact
//             </Link>

//             <Link>
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z" />
//                 </svg>
//               </span>
//               Profile
//             </Link>
//             <Link>
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#1f1f1f"
//                 >
//                   <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
//                 </svg>
//               </span>
//               Settings
//             </Link>

//             <div className="dashboard-login-container">
//               <Link>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     height="24px"
//                     viewBox="0 -960 960 960"
//                     width="24px"
//                     fill="#1f1f1f"
//                   >
//                     <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
//                   </svg>
//                 </span>
//                 Logout
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import "../../styles/dashboard.css";
import Logo from "../../assets/logo.png";


function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src={Logo} alt="logo" width={200} height={150}/>
        </div>

        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Browse Donations</li>
          <li>My Requests</li>
          <li>Active Pickups</li>
          <li>Messages</li>
          <li>Notifications</li>
          <li>My Impact</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Help & Support</li>
        </ul>
        <div className="dashboard-login-container">
        <button className="logout-btn">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Navbar */}
        <header className="navbar">
          <input
            type="text"
            placeholder="Search donations..."
            className="search-bar"
          />

          <div className="profile-section">
            <span>Bangalore, Karnataka</span>
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-img"
            />
          </div>
        </header>

        {/* Welcome */}
        <section className="welcome">
          <h1>Welcome back, Ananya! 👋</h1>
          <p>Let's make a difference today.</p>
        </section>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <h2>12</h2>
            <p>Available Donations</p>
          </div>

          <div className="stat-card">
            <h2>5</h2>
            <p>My Requests</p>
          </div>

          <div className="stat-card">
            <h2>2</h2>
            <p>Active Pickups</p>
          </div>

          <div className="stat-card">
            <h2>620 kg</h2>
            <p>CO₂ Saved</p>
          </div>
        </section>

        {/* Recommended Donations */}
        <section className="card-section">
          <div className="section-header">
            <h2>Recommended Donations</h2>
            <a href="/">View All</a>
          </div>

          <div className="donation-grid">

            <div className="donation-card">
              <img
                src="https://images.unsplash.com/photo-1512058564366-18510be2db19"
                alt=""
              />
              <h3>Veg Pulao (10 packs)</h3>
              <p>2 km away</p>
            </div>

            <div className="donation-card">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf"
                alt=""
              />
              <h3>Fresh Fruits</h3>
              <p>3 km away</p>
            </div>

            <div className="donation-card">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
                alt=""
              />
              <h3>Bread & Buns</h3>
              <p>4 km away</p>
            </div>

            <div className="donation-card">
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
        <section className="bottom-grid">

          <div className="activity-card">
            <h2>Recent Activity</h2>

            <ul>
              <li>Request for Veg Pulao accepted</li>
              <li>Pickup scheduled for May 18</li>
              <li>New message from donor</li>
            </ul>
          </div>

          <div className="impact-card">
            <h2>Your Impact</h2>

            <div className="impact-item">
              <span>Meals Shared</span>
              <strong>32</strong>
            </div>

            <div className="impact-item">
              <span>CO₂ Saved</span>
              <strong>620 kg</strong>
            </div>

            <div className="impact-item">
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
