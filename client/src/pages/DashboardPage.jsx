import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const median = (arr) => {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
};

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

  // Median stipend by graduation year
  const stipendByYear = records.reduce((acc, record) => {
    const year = record.yearOfGraduation || 'Unknown';
    const stipend = Number(record.stipendPerMonth) || 0;
    if (!acc[year]) acc[year] = [];
    acc[year].push(stipend);
    return acc;
  }, {});

  const medianStipendData = Object.entries(stipendByYear).map(([year, stipends]) => ({
    year,
    medianStipend: median(stipends)
  }));

  // Median package by graduation year (assuming package = stipend)
  const medianPackageData = medianStipendData; // same as median stipend for now

  // Median package by degree
  const stipendByDegree = records.reduce((acc, record) => {
    const degree = record.degree || 'Unknown';
    const stipend = Number(record.stipendPerMonth) || 0;
    if (!acc[degree]) acc[degree] = [];
    acc[degree].push(stipend);
    return acc;
  }, {});

  const medianPackageByDegreeData = Object.entries(stipendByDegree).map(([degree, stipends]) => ({
    degree,
    medianStipend: median(stipends)
  }));

  // Value companies by total stipend sum
  const companyStipendSum = records.reduce((acc, record) => {
    const company = record.companyName || 'Unknown';
    const stipend = Number(record.stipendPerMonth) || 0;
    acc[company] = (acc[company] || 0) + stipend;
    return acc;
  }, {});

  const valueCompanies = Object.entries(companyStipendSum)
    .map(([company, totalStipend]) => ({ company, totalStipend }))
    .sort((a, b) => b.totalStipend - a.totalStipend)
    .slice(0, 5); // top 5 companies

  return (
    <div className="container mx-auto px-6 py-10 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
        Internship Stats Dashboard
      </h2>

      {loading ? (
        <p className="text-center text-lg text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-400 font-semibold">{error}</p>
      ) : (
        <>
          <section className="bg-white shadow-2xl rounded-3xl p-10 border-t-8 border-green-400 max-w-5xl mx-auto mb-16 hover:shadow-green-300 transition-shadow duration-500">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 tracking-wide">
              Selections by Company
            </h3>
            <ResponsiveContainer width="100%" height={420}>
              <BarChart
                data={chartData}
                margin={{ top: 30, right: 40, left: 30, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="4 4" stroke="#d1fae5" />
                <XAxis
                  dataKey="company"
                  tick={{ fill: '#065f46', fontWeight: '600' }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: '#065f46', fontWeight: '600' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#ecfdf5', borderRadius: 8 }}
                  itemStyle={{ color: '#065f46', fontWeight: '700' }}
                />
                <Legend
                  wrapperStyle={{ color: '#065f46', fontWeight: '700' }}
                />
                <Bar dataKey="count" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section className="bg-white shadow-2xl rounded-3xl p-10 border-t-8 border-blue-400 max-w-5xl mx-auto mb-16 hover:shadow-blue-300 transition-shadow duration-500">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 tracking-wide">
              Median Stipend by Graduation Year
            </h3>
            <ResponsiveContainer width="100%" height={420}>
              <BarChart
                data={medianStipendData}
                margin={{ top: 30, right: 40, left: 30, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="4 4" stroke="#dbeafe" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: '#1e40af', fontWeight: '600' }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: '#1e40af', fontWeight: '600' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#eff6ff', borderRadius: 8 }}
                  itemStyle={{ color: '#1e40af', fontWeight: '700' }}
                />
                <Legend
                  wrapperStyle={{ color: '#1e40af', fontWeight: '700' }}
                />
                <Bar dataKey="medianStipend" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section className="bg-white shadow-2xl rounded-3xl p-10 border-t-8 border-pink-400 max-w-5xl mx-auto mb-16 hover:shadow-pink-300 transition-shadow duration-500">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 tracking-wide">
              Median Package by Degree
            </h3>
            <ResponsiveContainer width="100%" height={420}>
              <BarChart
                data={medianPackageByDegreeData}
                margin={{ top: 30, right: 40, left: 30, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="4 4" stroke="#fce7f3" />
                <XAxis
                  dataKey="degree"
                  tick={{ fill: '#be185d', fontWeight: '600' }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: '#be185d', fontWeight: '600' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fce7f3', borderRadius: 8 }}
                  itemStyle={{ color: '#be185d', fontWeight: '700' }}
                />
                <Legend
                  wrapperStyle={{ color: '#be185d', fontWeight: '700' }}
                />
                <Bar dataKey="medianStipend" fill="#db2777" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section className="bg-white shadow-2xl rounded-3xl p-10 border-t-8 border-green-600 max-w-5xl mx-auto hover:shadow-green-500 transition-shadow duration-500">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 tracking-wide">
              Top Value Companies by Total Stipend
            </h3>
            <ul className="list-disc list-inside text-center text-lg text-gray-700">
              {valueCompanies.map(({ company, totalStipend }) => (
                <li key={company} className="mb-2 font-semibold hover:text-green-500 transition-colors duration-300">
                  {company} - ₹{totalStipend.toLocaleString()}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
