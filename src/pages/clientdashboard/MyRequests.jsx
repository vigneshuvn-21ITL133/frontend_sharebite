    import "../../styles/MyRequests.css";
    import { useEffect, useState } from "react";
    import { getMyRequests } from "../../services/requestService";
    import { Link } from "react-router-dom";

    function MyRequests() {
      const [activeTab, setActiveTab] = useState("pending");
      const [requests, setRequests] = useState([]);
      const [loading, setLoading] = useState(true);

      const loadRequests = async () => {
        try {
          const response = await getMyRequests();
          setRequests(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        loadRequests();
      }, []);

      const filteredRequests = requests.filter(
        (item) => item.status === activeTab
      );

      return (

        <div className="myrequests-container">
          <Link to="/myrequest"></Link>
          <div className="page-header">
            <h1>My Requests</h1>
            <p>Track all your food requests</p>
          </div>

          <div className="status-tabs">
            {[
              "pending",
              "accepted",
              "rejected",
              "completed",
            ].map((tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab
                    ? "tab-btn active"
                    : "tab-btn"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() +
                  tab.slice(1)}
              </button>
            ))}
          </div>

          {loading ? (
            <p>Loading Requests...</p>
          ) : (
            <div className="request-list">

              {filteredRequests.length > 0 ? (
                filteredRequests.map((item) => (
                  <div
                    className="request-card"
                    key={item.id}
                  >

                    <div className="request-info">

                      <h3>
                        {item.donation_title}
                      </h3>

                      <p>
                        <strong>Donor:</strong>{" "}
                        {item.donor_name}
                      </p>

                      <p>
                        <strong>Quantity:</strong>{" "}
                        {item.quantity_requested}
                      </p>

                      <p>
                        <strong>Pickup Date:</strong>{" "}
                        {item.pickup_date}
                      </p>

                      <p>
                        <strong>Pickup Time:</strong>{" "}
                        {item.pickup_time}
                      </p>

                    </div>

                    <div
                      className={`status-badge ${item.status}`}
                    >
                      {item.status}
                    </div>

                  </div>
                ))
              ) : (
                <p className="no-data">
                  No {activeTab} requests found.
                </p>
              )}

            </div>
          )}
          <Link className="details-backnavigation"to="/dashboard"></Link>
        </div>
      );
    }

    export default MyRequests;