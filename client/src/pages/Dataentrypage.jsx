import React, { useState } from "react";
import axios from "axios";
const mentors = [
    { name: "Dr. Vaibhav joshi", email: "vaibhav.22b0101022@abes.ac.in" },
    { name: "tanya", email: "tanya.22b010101177@abes.ac.in" },
    { name: "Ms. Pooja Verma", email: "pooja.verma@college.edu" }
  ];
const DataEntryPage = () => {
  const initialFormData = {
    studentName: "",
    email: "",
    phone: "",
    degree: "",
    gradYear: "",
    internshipTitle: "",
    companyName: "",
    stipendPerMonth: "",
    location: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
    mentorEmail: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { id, value } = e.target;
    const safeValue = String(value);
    setFormData((prevFormData) => ({ ...prevFormData, [id]: safeValue }));

    console.log("formData after change:", { ...formData, [id]: safeValue });
  };

  const handleMentorChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, mentorEmail: e.target.value });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission triggered");

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
        to: formData.endDate,
      },
      mentorEmail: formData.mentorEmail, // NEW
    };

    try {
      console.log("Payload being sent:", payload);
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/submit`, payload);
      alert("Submitted Successfully! Sent to mentor for approval.");
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
                  <label htmlFor="studentName" className="form-label fw-bold">
                    Student Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mentorEmail" className="form-label fw-bold">
                    Select Mentor
                  </label>
                  <select onChange={handleMentorChange} required>
                    <option value="">Select Mentor</option>
                    {mentors.map((mentor, index) => (
                    //    console.log(mentor)
                      <option key={index} name={mentor.email} value={mentor.email}>
                        {mentor.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <h4 className="mb-3 text-secondary">Academic Information</h4>
                <div className="mb-3">
                  <label htmlFor="degree" className="form-label fw-bold">
                    Degree
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select degree</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="gradYear" className="form-label fw-bold">
                    Year of Graduation
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="gradYear"
                    value={formData.gradYear}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3 text-secondary">Internship Details</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="internshipTitle"
                    className="form-label fw-bold"
                  >
                    Internship Title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="internshipTitle"
                    value={formData.internshipTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label fw-bold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="stipendPerMonth"
                    className="form-label fw-bold"
                  >
                    Stipend Per Month (₹)
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="stipendPerMonth"
                    value={formData.stipendPerMonth}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label fw-bold">
                    Location
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select location</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>Onsite</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label fw-bold">
                    Duration
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      id="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-group-text">to</span>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      id="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="responsibilities" className="form-label fw-bold">
                Responsibilities
              </label>
              <textarea
                className="form-control form-control-lg"
                id="responsibilities"
                rows="4"
                value={formData.responsibilities}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-outline-secondary btn-lg me-md-2"
              >
                Reset
              </button>
              <button type="submit" className="btn btn-primary btn-lg">
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataEntryPage;
