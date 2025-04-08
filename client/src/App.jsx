import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import AppRoutes from "./routes";
import React from "react";

function App() {
    return (
        <DataProvider>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
        </DataProvider>
    );
}

export default App;
