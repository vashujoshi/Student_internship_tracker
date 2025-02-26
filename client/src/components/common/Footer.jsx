import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
            <p>© {new Date().getFullYear()} Internship Tracker. All rights reserved.</p>
            <div className="mt-2">
                <Link to="/" className="px-2">Home</Link> | 
                <Link to="/dashboard" className="px-2">Dashboard</Link> | 
                <Link to="/contact" className="px-2">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;
