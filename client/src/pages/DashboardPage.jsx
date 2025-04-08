import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const DashboardPage = () => {
  const { records = [], loading, error } = useContext(DataContext); // Default to empty array

  // Group by company
  const companyCounts = records.reduce((acc, record) => {
    const company = record.companyName || 'Unknown';
    acc[company] = (acc[company] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(companyCounts).map(([company, count]) => ({
    company,
    count
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6 text-green-700">
        Internship Stats Dashboard
      </h2>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chartData.map((item, index) => (
            <div
              key={item.company}
              className="bg-white shadow-lg rounded-2xl p-5 border-t-4 border-green-500 transition transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.company}
              </h3>
              <p className="text-green-600 text-lg font-medium">
                {item.count} Selection{item.count > 1 ? 's' : ''}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};CSSVariableReferenceValue



export default DashboardPage;
