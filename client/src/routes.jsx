import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DataEntryPage from "./pages/Dataentrypage";
// import TableViewPage from "./pages/TableViewPage";  // Uncomment when needed
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/data-entry" element={<DataEntryPage />} />
                    {/* <Route path="/table-view" element={<TableViewPage />} /> */}  
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default AppRoutes;
