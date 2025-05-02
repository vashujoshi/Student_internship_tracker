import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer'; // Importing Footer
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Background Image (positioned absolutely behind content) */}
            <div 
              style={{
                backgroundImage: `url('/src/assets/maxresdefault.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1
              }}
            ></div>
            
            {/* Main Content */}
            <div className="container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                <div className="card   rounded-4 text-center p-4" style={{ 
                  maxWidth: "620px",
                  backgroundColor: 'transparent'
                }}>
                    <div className="card-body">
                        <h1 className="display-4 fw-bold text-white mb-3"  >
                            Welcome to Internship Tracker
                        </h1>
                        <p className="card-text text-white mb-4"   >
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
