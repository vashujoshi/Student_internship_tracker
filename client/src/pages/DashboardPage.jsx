import React from 'react';

const DashboardPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Card Title 1</h2>
                    <p className="text-gray-700">Some information or statistics can go here.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Card Title 2</h2>
                    <p className="text-gray-700">Some information or statistics can go here.</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Card Title 3</h2>
                    <p className="text-gray-700">Some information or statistics can go here.</p>
                </div>
                {/* Add more cards as needed */}
            </div>
        </div>
    );
};

export default DashboardPage;