// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const MentorDashboard = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get('/api/mentor/pending-requests', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setRequests(res.data);
//     } catch (err) {
//       console.error('Failed to fetch requests', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const approveRequest = async (id) => {
//     try {
//       await axios.put(`/api/mentor/approve/${id}`, {}, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchRequests(); // Refresh list after approval
//     } catch (err) {
//       console.error('Failed to approve request', err);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Pending Internship Approvals</h2>
//       {requests.length === 0 ? (
//         <p>No pending requests.</p>
//       ) : (
//         <ul className="space-y-4">
//           {requests.map(req => (
//             <li key={req._id} className="border p-4 rounded shadow">
//               <p><strong>Student:</strong> {req.studentName}</p>
//               <p><strong>Email:</strong> {req.emailAddress}</p>
//               <p><strong>Company:</strong> {req.companyName}</p>
//               <button
//                 onClick={() => approveRequest(req._id)}
//                 className="mt-2 bg-green-600 text-white px-4 py-1 rounded"
//               >
//                 Approve
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MentorDashboard;
// client/src/pages/MentorDashboardPage.jsx


// --------
import { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

// const {user}=useContext(AuthContext);
// const token = user?.token;


const MentorDashboardPage = () => {
  const [internships, setInternships] = useState([]);

   console.log("Token being sent:", token);

  const fetchPending = async () => {
    const token = sessionStorage.getItem('token');
    try {
      const res = await axios.get('http://localhost:3000/api/protected/mentor-dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships(res.data.internships);
    } catch (err) {
      console.error('Error fetching internships:', err);
    }
  };

  const handleApprove = async (id) => {
    const token = sessionStorage.getItem('token');
    try {
      await axios.post(`/api/protected/approve/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.error('Approval failed:', err);
    }
  };

  const handleReject = async (id) => {
    const token = sessionStorage.getItem('token');
    try {
      await axios.delete(`/api/protected/reject/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.error('Rejection failed:', err);
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
            <p><strong>Student:</strong> {data.studentName}</p>
            <p><strong>Email:</strong> {data.emailAddress}</p>
            <p><strong>Company:</strong> {data.companyName}</p>
            <button onClick={() => handleApprove(data._id)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
              Approve
            </button>
            <button onClick={() => handleReject(data._id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MentorDashboardPage;
