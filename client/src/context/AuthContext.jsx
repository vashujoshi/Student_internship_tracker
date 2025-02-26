import React from "react";
import { createContext, useState, useEffect, useContext } from "react";


// 1️⃣ Create Auth Context
const AuthContext = createContext();

// 2️⃣ Create AuthProvider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user from localStorage on app start
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    // Login function
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // Save user in localStorage
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3️⃣ Custom Hook to Use Auth Context
export const useAuth = () => useContext(AuthContext);
