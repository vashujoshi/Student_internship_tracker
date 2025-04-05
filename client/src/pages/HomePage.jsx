import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer'; // Importing Footer
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="d-flex flex-column min-vh-100 bg-gradient-custom">
            {/* Main Content */}
            <div className="container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                <div className="card shadow-lg rounded-4 text-center p-4 bg-white" style={{ maxWidth: "600px" }}>
                    <div className="card-body">
                        <h1 className="display-4 fw-bold text-primary mb-3">
                            Welcome to Internship Tracker
                        </h1>
                        <p className="card-text text-muted mb-4">
                            Effortlessly track and manage your internships. Stay organized and monitor your progress with ease.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/dashboard" className="btn btn-primary px-4 py-2 rounded-3 shadow-sm transition-btn">
                                Go to Dashboard
                            </Link>
                            <Link to="/login" className="btn btn-success px-4 py-2 rounded-3 shadow-sm transition-btn">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

      
        </div>
    );
};

export default HomePage;
