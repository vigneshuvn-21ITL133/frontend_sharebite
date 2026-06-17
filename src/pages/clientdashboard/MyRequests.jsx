import "../../styles/MyRequests.css";
import { useState } from "react";

function MyRequests() {
  const [activeTab, setActiveTab] = useState("Pending");

  const requests = {
    Pending: [
      {
        id: 1,
        food: "Veg Pulao",
        donor: "Hotel Green Park",
        quantity: "5 Packs",
        date: "15 June 2026",
      },
    ],

    Accepted: [
      {
        id: 2,
        food: "Bananas",
        donor: "Fresh Mart",
        quantity: "10 Kg",
        pickup: "16 June 2026",
      },
    ],

    Rejected: [
      {
        id: 3,
        food: "Bread & Buns",
        donor: "Bake House",
        reason: "Already Reserved",
      },
    ],

    Completed: [
      {
        id: 4,
        food: "Veg Curry",
        donor: "MG Road Hotel",
        quantity: "8 Packs",
      },
    ],
  };

  return (
    <div className="myrequests-container">

      <div className="page-header">
        <h1>My Requests</h1>
        <p>Track all your food requests</p>
      </div>

      {/* Tabs */}

      <div className="status-tabs">
        {["Pending", "Accepted", "Rejected", "Completed"].map(
          (tab) => (
            <button
              key={tab}
              className={
                activeTab === tab
                  ? "tab-btn active"
                  : "tab-btn"
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Request Cards */}

      <div className="request-list">

        {requests[activeTab].map((item) => (
          <div className="request-card" key={item.id}>

            <div className="request-info">
              <h3>{item.food}</h3>

              <p>
                Donor: {item.donor}
              </p>

              {item.quantity && (
                <p>
                  Quantity: {item.quantity}
                </p>
              )}

              {item.date && (
                <p>
                  Requested On: {item.date}
                </p>
              )}

              {item.pickup && (
                <p>
                  Pickup Date: {item.pickup}
                </p>
              )}

              {item.reason && (
                <p>
                  Reason: {item.reason}
                </p>
              )}
            </div>

            <div className={`status-badge ${activeTab.toLowerCase()}`}>
              {activeTab}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MyRequests;