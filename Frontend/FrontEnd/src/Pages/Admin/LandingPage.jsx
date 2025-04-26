import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../cssFiles/Admin/LandingPage.css";
function LandingPage() {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [role, setRole] = useState(""); // "admin" or "customer"
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const openModal = (userRole) => {
        setRole(userRole);
        setShowModal(true);
        setUsername("");
        setPassword("");
        setMessage("");
    };

    const handleLogin = async () => {
        if (!username || !password) {
            setMessage("Please enter both username and password.");
            return;
        }

        const endpoint =
            role === "admin"
                ? `http://localhost:8080/admin/authenticate`
                : `http://localhost:8080/customer/authenticate`;

        try {
            const response = await fetch(
                `${endpoint}?id=${username}&password=${encodeURIComponent(password)}`
            );

            const result = await response.text(); // Assuming backend returns plain text

            if (result === "Authentication failed") {
                setMessage("Authentication failed. Please try again.");
                return;
            }

            // Successful login
            setMessage("Login successful! Redirecting...");
            setTimeout(() => {
                setShowModal(false);
                localStorage.setItem('customerId', username);
                navigate(`/${role}`);
            }, 1000);

        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1 className="landing-page-title">Welcome to the Library System!</h1>
            <div className="landing-page-button-section">
                <button
                    onClick={() => openModal("admin")}
                    style={{ margin: "10px" }}
                    type="button"
                    className="admin-btn"
                >
                    Admin
                </button>
                <button
                    onClick={() => openModal("customer")}
                    style={{ margin: "10px" }}
                    type="button"
                    className="admin-btn"
                >
                    Customer
                </button>

            </div>


            {showModal && (
                <div className="landing-page-authentication-pop-up">
                    <div className="landing-page-pop-up">
                        <h2 className="landing-page-authentication-popup-heading">
                            {role === "admin" ? "Admin Login" : "Customer Login"}
                        </h2>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder=" "
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-field"
                                required
                            />
                            <label className="floating-label">User ID</label>
                        </div>

                        <div className="input-wrapper">
                            <input
                                type="password"
                                placeholder=" "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                                required
                            />
                            <label className="floating-label">Password</label>
                        </div>

                        {message && <p className="landing-page-authentication-message">{message}</p>}
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleLogin}
                                className="landing-page-button"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="landing-page-button"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LandingPage;
