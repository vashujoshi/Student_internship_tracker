import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

const TableViewPage = () => {
  const { records, loading, error } = useContext(DataContext);
  const [filteredRecords, setFilteredRecords] = useState([]);

  const [filters, setFilters] = useState({
    companyName: '',
    yearOfGraduation: '',
    stipendSort: ''
  });

  useEffect(() => {
    setFilteredRecords(records);
  }, [records]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    let filtered = [...records];

    if (updatedFilters.companyName) {
      filtered = filtered.filter(record =>
        record.companyName?.toLowerCase().includes(updatedFilters.companyName.toLowerCase())
      );
    }

    if (updatedFilters.yearOfGraduation) {
      filtered = filtered.filter(record =>
        record.yearOfGraduation === updatedFilters.yearOfGraduation
      );
    }

    if (updatedFilters.stipendSort === 'asc') {
      filtered.sort((a, b) => a.stipendPerMonth - b.stipendPerMonth);
    } else if (updatedFilters.stipendSort === 'desc') {
      filtered.sort((a, b) => b.stipendPerMonth - a.stipendPerMonth);
    }

    setFilteredRecords(filtered);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-success text-white">
          <h2 className="text-center mb-0">Internship Records</h2>
        </div>
        <div className="card-body">

          {/* Filters */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <label className="form-label fw-bold">Company Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                placeholder="Search company..."
                value={filters.companyName}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">Graduation Year</label>
              <input
                type="text"
                className="form-control"
                name="yearOfGraduation"
                placeholder="e.g., 2026"
                value={filters.yearOfGraduation}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">Stipend Sort</label>
              <select
                className="form-select"
                name="stipendSort"
                value={filters.stipendSort}
                onChange={handleFilterChange}
              >
                <option value="">None</option>
                <option value="asc">Lowest to Highest</option>
                <option value="desc">Highest to Lowest</option>
              </select>
            </div>
          </div>

          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-danger text-center">{error}</p>
          ) : filteredRecords.length === 0 ? (
            <p className="text-center">No records found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="table-success">
                  <tr>
                    <th>Student</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Degree</th>
                    <th>Grad Year</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Responsibilities</th>
                    <th>Stipend</th>
                    <th>Location</th>
                    <th>From</th>
                    <th>To</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record, idx) => (
                    <tr key={idx}>
                      <td>{record.studentName}</td>
                      <td>{record.emailAddress}</td>
                      <td>{record.phoneNumber}</td>
                      <td>{record.degree}</td>
                      <td>{record.yearOfGraduation}</td>
                      <td>{record.internshipTitle}</td>
                      <td>{record.companyName}</td>
                      <td>{record.responsibilities}</td>
                      <td>{record.stipendPerMonth}</td>
                      <td>{record.location}</td>
                      <td>{new Date(record.duration.from).toLocaleDateString()}</td>
                      <td>{new Date(record.duration.to).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default TableViewPage;
