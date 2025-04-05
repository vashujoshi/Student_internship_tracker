import React from 'react';

const DataEntryPage = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="text-center mb-0">Student Internship Details Entry</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-3 text-secondary">Personal Information</h4>
                                <div className="mb-3">
                                    <label htmlFor="studentName" className="form-label fw-bold">Student Name</label>
                                    <input type="text" className="form-control form-control-lg" id="studentName" placeholder="Enter student's name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                                    <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                    <input type="tel" className="form-control form-control-lg" id="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-3 text-secondary">Academic Information</h4>
                                <div className="mb-3">
                                    <label htmlFor="degree" className="form-label fw-bold">Degree</label>
                                    <select className="form-select form-select-lg" id="degree" required>
                                        <option value="">Select degree</option>
                                        <option>Bachelor's</option>
                                        <option>Master's</option>
                                        <option>PhD</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="institution" className="form-label fw-bold">Institution</label>
                                    <input type="text" className="form-control form-control-lg" id="institution" placeholder="Enter institution name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gradYear" className="form-label fw-bold">Year of Graduation</label>
                                    <input type="number" className="form-control form-control-lg" id="gradYear" placeholder="Enter year of graduation" required />
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />
                        
                        <h4 className="mb-3 text-secondary">Internship Details</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="internshipTitle" className="form-label fw-bold">Internship Title</label>
                                    <input type="text" className="form-control form-control-lg" id="internshipTitle" placeholder="Enter internship title" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label fw-bold">Company Name</label>
                                    <input type="text" className="form-control form-control-lg" id="companyName" placeholder="Enter company name" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="duration" className="form-label fw-bold">Duration</label>
                                    <div className="input-group">
                                        <input type="date" className="form-control form-control-lg" placeholder="Start date" />
                                        <span className="input-group-text">to</span>
                                        <input type="date" className="form-control form-control-lg" placeholder="End date" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="responsibilities" className="form-label fw-bold">Responsibilities</label>
                            <textarea className="form-control form-control-lg" id="responsibilities" rows="4" placeholder="Describe your responsibilities" required></textarea>
                        </div>
                        
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="reset" className="btn btn-outline-secondary btn-lg me-md-2">Reset</button>
                            <button type="submit" className="btn btn-primary btn-lg">Submit Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DataEntryPage;