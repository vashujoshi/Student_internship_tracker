{/* Summary Statistics */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-white p-6 rounded shadow-md">
  <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Placements</h3>
  <p className="text-3xl font-bold text-blue-600">{summaryStats.totalPlacements}</p>
</div>
<div className="bg-white p-6 rounded shadow-md">
  <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Internships</h3>
  <p className="text-3xl font-bold text-green-600">{summaryStats.totalInternships}</p>
</div>
<div className="bg-white p-6 rounded shadow-md">
  <h3 className="text-lg font-semibold text-gray-700 mb-2">Unique Companies</h3>
  <p className="text-3xl font-bold text-purple-600">{summaryStats.uniqueCompanies}</p>
</div>
<div className="bg-white p-6 rounded shadow-md">
  <h3 className="text-lg font-semibold text-gray-700 mb-2">Success Rate</h3>
  <p className="text-3xl font-bold text-amber-600">{summaryStats.successRate}%</p>
</div>
</div>