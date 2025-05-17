// client/src/context/DataContext.jsx
import React, { createContext, useEffect, useState } from 'react';
// REMOVE: import axios from 'axios';
import axiosInstance from '../api/axiosInstance'; //  <--- IMPORT OUR INSTANCE (adjust path if needed)

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // USE OUR INSTANCE and relative path (if baseURL is http://localhost:3000)
        const res = await axiosInstance.get('/api/getALL');
        // If your baseURL in axiosInstance.js is 'http://localhost:3000/api', then use:
        // const res = await axiosInstance.get('/getALL');  <-- this would be wrong with baseURL http://localhost:3000
        // If your baseURL in axiosInstance.js is 'http://localhost:3000', then use:
        // const res = await axiosInstance.get('/api/getALL'); // Correct for baseURL http://localhost:3000

        setRecords(res.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ records, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
