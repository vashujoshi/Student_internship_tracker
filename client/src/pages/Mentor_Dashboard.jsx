import { useEffect, useState } from 'react';
import axios from 'axios';

const MentorDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await axios.get('/api/mentor/pending-requests', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setRequests(res.data);
    } catch (err) {
      console.error('Failed to fetch requests', err);
    } finally {
      setLoading(false);
    }
  };

  const approveRequest = async (id) => {
    try {
      await axios.put(`/api/mentor/approve/${id}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchRequests(); // Refresh list after approval
    } catch (err) {
      console.error('Failed to approve request', err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pending Internship Approvals</h2>
      {requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map(req => (
            <li key={req._id} className="border p-4 rounded shadow">
              <p><strong>Student:</strong> {req.studentName}</p>
              <p><strong>Email:</strong> {req.emailAddress}</p>
              <p><strong>Company:</strong> {req.companyName}</p>
              <button
                onClick={() => approveRequest(req._id)}
                className="mt-2 bg-green-600 text-white px-4 py-1 rounded"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MentorDashboard;
