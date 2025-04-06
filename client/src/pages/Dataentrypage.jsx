import React, { useState } from 'react';
import axios from 'axios';

const DataEntryPage = () => {
    const initialFormData = {
        studentName: '',
        email: '',
        phone: '',
        degree: '',
        gradYear: '',
        internshipTitle: '',
        companyName: '',
        stipendPerMonth: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            studentName: formData.studentName,
            emailAddress: formData.email,
            phoneNumber: formData.phone,
            degree: formData.degree,
            yearOfGraduation: formData.gradYear,
            internshipTitle: formData.internshipTitle,
            companyName: formData.companyName,
            stipendPerMonth: formData.stipendPerMonth,
            location: formData.location,
            responsibilities: formData.responsibilities,
            duration: {
                from: formData.startDate,
                to: formData.endDate
            }
        };

        try {
            const res = await axios.post('http://localhost:3000/api/submit', payload);
            alert("Submitted Successfully!");
            console.log(res.data);
            resetForm();
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please check the console.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="text-center mb-0">Student Internship Details Entry</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-3 text-secondary">Personal Information</h4>
                                <div className="mb-3">
                                    <label htmlFor="studentName" className="form-label fw-bold">Student Name</label>
                                    <input type="text" className="form-control form-control-lg" id="studentName" value={formData.studentName} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                                    <input type="email" className="form-control form-control-lg" id="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                    <input type="tel" className="form-control form-control-lg" id="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h4 className="mb-3 text-secondary">Academic Information</h4>
                                <div className="mb-3">
                                    <label htmlFor="degree" className="form-label fw-bold">Degree</label>
                                    <select className="form-select form-select-lg" id="degree" value={formData.degree} onChange={handleChange} required>
                                        <option value="">Select degree</option>
                                        <option>Bachelor's</option>
                                        <option>Master's</option>
                                        <option>PhD</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gradYear" className="form-label fw-bold">Year of Graduation</label>
                                    <input type="number" className="form-control form-control-lg" id="gradYear" value={formData.gradYear} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3 text-secondary">Internship Details</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="internshipTitle" className="form-label fw-bold">Internship Title</label>
                                    <input type="text" className="form-control form-control-lg" id="internshipTitle" value={formData.internshipTitle} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label fw-bold">Company Name</label>
                                    <input type="text" className="form-control form-control-lg" id="companyName" value={formData.companyName} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stipendPerMonth" className="form-label fw-bold">Stipend Per Month (₹)</label>
                                    <input type="number" className="form-control form-control-lg" id="stipendPerMonth" value={formData.stipendPerMonth} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label fw-bold">Location</label>
                                    <select className="form-select form-select-lg" id="location" value={formData.location} onChange={handleChange} required>
                                        <option value="">Select location</option>
                                        <option>Remote</option>
                                        <option>Hybrid</option>
                                        <option>Onsite</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="startDate" className="form-label fw-bold">Duration</label>
                                    <div className="input-group">
                                        <input type="date" className="form-control form-control-lg" id="startDate" value={formData.startDate} onChange={handleChange} required />
                                        <span className="input-group-text">to</span>
                                        <input type="date" className="form-control form-control-lg" id="endDate" value={formData.endDate} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="responsibilities" className="form-label fw-bold">Responsibilities</label>
                            <textarea className="form-control form-control-lg" id="responsibilities" rows="4" value={formData.responsibilities} onChange={handleChange} required></textarea>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                type="button"
                                onClick={resetForm}
                                className="btn btn-outline-secondary btn-lg me-md-2"
                            >
                                Reset
                            </button>
                            <button type="submit" className="btn btn-primary btn-lg">Submit Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DataEntryPage;
