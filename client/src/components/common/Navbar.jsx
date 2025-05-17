// client/src/components/common/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Ensure path is correct
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // For debugging, add this:
  console.log("Navbar user context:", user); 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold primary text-white" to="/">
          Internship Tracker
        </Link>
        <button /* ... toggler ... */ >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Common Links */}
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white px-3" to="/">Home</Link>
            </li>
            {user && ( // Show if any user is logged in
              <>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white px-3" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white px-3" to="/data-entry">Data Entry</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white px-3" to="/table-view">Students Data</Link>
                </li>
              </>
            )}

            {/* Existing CCPD Admin Link (if it's a separate, valid role) */}
            {user && user.role === "ccpd_admin" && (
              <li className="nav-item">
                <Link className="nav-link btn btn-warning text-white px-3" to="/ccpd-dashboard">CCPD Dashboard</Link>
              </li>
            )}

            {/* MENTOR ADMIN LINK - THIS IS THE KEY FIX */}
            {user && user.role === "mentor_admin" && (
              <li className="nav-item">
                <Link className="nav-link btn btn-info text-white px-3" to="/mentor-dashboard">Mentor Dashboard</Link>
              </li>
            )}

            {/* Login/Logout */}
            {user ? (
              <li className="nav-item">
                <button className="nav-link btn btn-danger text-white px-3" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link btn btn-primary text-white px-3" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
