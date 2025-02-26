import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes";
import React from "react";

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}

export default App;
