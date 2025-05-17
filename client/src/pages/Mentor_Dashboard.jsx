import React from "react";
import { useEffect, useState, useContext } from "react";
import axiosInstance from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";

// const {user}=useContext(AuthContext);
// const token = user?.token;

const MentorDashboardPage = () => {
  const [internships, setInternships] = useState([]);
  // const { user } = useContext(AuthContext); // Example if you need user info

  const fetchPending = async () => {
    try {
      // USE OUR INSTANCE - headers will be added automatically
      const res = await axiosInstance.get("/api/protected/mentor-dashboard");
      setInternships(res.data.internships);
    } catch (err) {
      console.error("Error fetching internships:", err);
      // Consider more specific error handling, e.g., if err.response.status === 401 or 403
    }
  };

  const handleApprove = async (id) => {

    try {
      // USE OUR INSTANCE
      await axiosInstance.post(`/api/protected/approve/${id}`, {}); // Empty payload as before
      // Optimistic update or re-fetch:
      setInternships((prev) => prev.filter((i) => i._id !== id));
      // OR call fetchPending() again if you prefer
    } catch (err) {
      console.error("Approval failed:", err);
    }
  };

  const handleReject = async (id) => {
    // const token = sessionStorage.getItem('token'); // NO LONGER NEEDED HERE
    try {
      // USE OUR INSTANCE
      await axiosInstance.delete(`/api/protected/reject/${id}`);
      // Optimistic update or re-fetch:
      setInternships((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.error("Rejection failed:", err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Pending Internship Approvals</h2>
      {internships.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        internships.map((data) => (
          <div key={data._id} className="border p-4 mb-3 rounded shadow">
            <p>
              <strong>Student:</strong> {data.studentName}
            </p>
            <p>
              <strong>Email:</strong> {data.emailAddress}
            </p>
            <p>
              <strong>Company:</strong> {data.companyName}
            </p>
            <p><strong>To be approved by:</strong>{data.mentorEmail}</p>
            <button
              onClick={() => handleApprove(data._id)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 16px",
                borderRadius: "5px",
                marginRight: "10px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
            >
              Approve
            </button>

            <button
              onClick={() => handleReject(data._id)}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                padding: "10px 16px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d32f2f")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f44336")}
            >
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MentorDashboardPage;
