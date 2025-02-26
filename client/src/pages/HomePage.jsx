
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
            <div className="bg-white p-5 rounded shadow w-100 max-w-50 text-center">
                <h1 className="display-4 font-weight-bold mb-4">Welcome to Internship Tracker</h1>
                <p className="text-muted mb-4">
                    Track and manage your internships with ease. Our platform helps you stay organized and keep track of your progress.
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="/dashboard" className="btn btn-primary mr-2">
                        Go to Dashboard
                    </Link>
                    <Link to="/login" className="btn btn-success">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;