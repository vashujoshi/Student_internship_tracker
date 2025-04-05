// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold primary text-white" to="/">
          Internship Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white px-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white px-3" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white px-3" to="/data-entry">Data Entry</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  btn btn-primary text-white px-3" to="/table-view">Table View</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white px-3" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
