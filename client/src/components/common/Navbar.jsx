import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Internship Tracker</Link>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white focus:outline-none" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Navigation Links */}
                <div className={`md:flex md:items-center ${menuOpen ? "block" : "hidden"}`}>
                    <Link to="/" className="px-3 py-2">Home</Link>
                    <Link to="/dashboard" className="px-3 py-2">Dashboard</Link>
                    <Link to="/data-entry" className="px-3 py-2">Data Entry</Link>
                    <Link to="/table-view" className="px-3 py-2">Table View</Link>
                    <Link to="/login" className="bg-green-500 px-4 py-2 rounded ml-2">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;