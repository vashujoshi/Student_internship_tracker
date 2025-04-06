import React, { useState, useEffect } from 'react';

const DashboardPage = () => {
  // State for backend data
  const [placementData, setPlacementData] = useState([
    {id: 1, company: 'Google', count: 24},
    {id: 2, company: 'Amazon', count: 18},
    {id: 3, company: 'Microsoft', count: 15}
  ]);

  const [internshipData, setInternshipData] = useState([
    {id: 1, company: 'Meta', count: 32},
    {id: 2, company: 'Apple', count: 25},
    {id: 3, company: 'Netflix', count: 8}
  ]);

  // Calculate totals from data
  const finalNumbers = {
    placements: placementData.reduce((sum, item) => sum + item.count, 0),
    internships: internshipData.reduce((sum, item) => sum + item.count, 0),
    companies: [...new Set([...placementData, ...internshipData].map(item => item.company))].length,
    success: 78 // Would come from backend
  };

  // Current displayed numbers for animation
  const [numbers, setNumbers] = useState({
    placements: 0,
    internships: 0,
    companies: 0,
    success: 0
  });

  // Simple count-up animation
  useEffect(() => {
    const timer = setInterval(() => {
      setNumbers(prev => ({
        placements: increment(prev.placements, finalNumbers.placements),
        internships: increment(prev.internships, finalNumbers.internships),
        companies: increment(prev.companies, finalNumbers.companies),
        success: increment(prev.success, finalNumbers.success)
      }));
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Helper to increment number
  const increment = (current, target) => {
    return current < target ? current + 1 : target;
  };

  return (
    <div className="container py-4">
      <h1 className="display-4 mb-4">Internship & Placement Dashboard</h1>
      
      {/* Summary Statistics Row */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-muted">Total Placements</h5>
              <p className="display-6 text-primary">
                {numbers.placements}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-muted">Total Internships</h5>
              <p className="display-6 text-success">
                {numbers.internships}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-muted">Unique Companies</h5>
              <p className="display-6 text-info">
                {numbers.companies}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-muted">Success Rate</h5>
              <p className="display-6 text-warning">
                {numbers.success}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Cards Row */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="text-primary mb-3">Placements</h5>
              <div className="d-flex flex-column gap-2">
                {placementData.map(item => (
                  <div key={item.id} className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                    <span>{item.company}</span>
                    <span className="badge bg-primary">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="text-success mb-3">Internships</h5>
              <div className="d-flex flex-column gap-2">
                {internshipData.map(item => (
                  <div key={item.id} className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                    <span>{item.company}</span>
                    <span className="badge bg-success">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
