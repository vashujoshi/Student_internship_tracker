import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container">
                <p className="mb-2">© {new Date().getFullYear()} Student Internship Tracker. All rights reserved.</p>
                
                {/* Navigation Links */}
                <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
                    <Link to="/" className="text-white text-decoration-none px-2 hover-opacity">Home</Link> | 
                    <Link to="/dashboard" className="text-white text-decoration-none px-2 hover-opacity">Dashboard</Link> | 
                    <Link to="/contacts" className="text-white text-decoration-none px-2 hover-opacity">Contacts</Link> | 
                     </div>

                {/* Social Icons */}
                <div className="d-flex justify-content-center gap-3">
                    <a href="https://facebook.com" className="text-white fs-4 opacity-75 hover-opacity">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" className="text-white fs-4 opacity-75 hover-opacity">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" className="text-white fs-4 opacity-75 hover-opacity">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
