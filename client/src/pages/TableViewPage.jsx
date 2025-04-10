import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import * as XLSX from 'xlsx'; // Import the xlsx library

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

  const downloadExcel = () => {
    // Preprocess the data to include all required fields
    const processedData = filteredRecords.map(record => ({
      StudentName: record.studentName || '',
      EmailAddress: record.emailAddress || '',
      PhoneNumber: record.phoneNumber || '',
      Degree: record.degree || '',
      YearOfGraduation: record.yearOfGraduation || '',
      InternshipTitle: record.internshipTitle || '',
      CompanyName: record.companyName || '',
      StipendPerMonth: record.stipendPerMonth || '',
      Location: record.location || '',
      Responsibilities: record.responsibilities || '',
      DurationFrom: record.duration?.from ? new Date(record.duration.from).toLocaleDateString() : '',
      DurationTo: record.duration?.to ? new Date(record.duration.to).toLocaleDateString() : ''
    }));

    // Convert the processed data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(processedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Internship Records');

    // Download the Excel file
    XLSX.writeFile(workbook, 'Internship_Records.xlsx');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Internship Records</h2>
          <button className="btn btn-light" onClick={downloadExcel}>
            Download Excel
          </button>
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