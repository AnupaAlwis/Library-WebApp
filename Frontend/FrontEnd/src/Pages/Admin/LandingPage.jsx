import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                navigate(`/${role}`);
            }, 1000);

        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Welcome to the Library System!</h1>
            <button
                onClick={() => openModal("admin")}
                style={{ margin: "10px" }}
                type="button"
                className="btn btn-info"
            >
                Admin
            </button>
            <button
                onClick={() => openModal("customer")}
                style={{ margin: "10px" }}
                type="button"
                className="btn btn-info"
            >
                Customer
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-80">
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            {role === "admin" ? "Admin Login" : "Customer Login"}
                        </h2>
                        <input
                            type="text"
                            placeholder="User ID"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mb-3 px-3 py-2 border rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mb-3 px-3 py-2 border rounded"
                        />
                        {message && <p className="text-sm text-red-600 mb-2">{message}</p>}
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleLogin}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
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
