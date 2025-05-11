import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const OtpAuthPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1 = Email, Step 2 = OTP
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/otp/send-otp", { email });
      // const res = await axios.post("`${process.env.REACT_APP_API_BASE_URL}/api/otp/send-otp`", { email });
      alert("OTP sent to your college email.");
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    try {
      // const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/otp/verify-otp`, { email, otp });
      const res = await axios.post("http://localhost:3000/api/otp/verify-otp", { email, otp });
      // Optional: You can generate a token in backend and return it here
      login("dummy_token", "student"); // Replace with real token
      alert("OTP Verified. Redirecting...");
      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">{step === 1 ? "Verify Email" : "Enter OTP"}</h2>

        {step === 1 && (
          <>
            <div className="mb-3">
              <label className="form-label">College Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@abes.ac.in"
                required
              />
            </div>
            <button className="btn btn-primary w-100" onClick={sendOtp}>Send OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-3">
              <label className="form-label">Enter OTP</label>
              <input
                type="text"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit OTP"
                required
              />
            </div>
            <button className="btn btn-success w-100 mb-2" onClick={verifyOtp}>Verify & Login</button>
            <button className="btn btn-secondary w-100" onClick={() => setStep(1)}>Back</button>
          </>
        )}
      </div>
    </div>
  );
};

export default OtpAuthPage;
