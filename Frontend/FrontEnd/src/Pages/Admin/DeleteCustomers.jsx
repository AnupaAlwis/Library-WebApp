import React, { useState } from "react";
import "../cssFiles/Admin/DeleteUser.css";

function DeleteCustomer() {
    const [userId, setUserId] = useState("");
    const [message, setMessage] = useState("");

    const handleDelete = (e) => {
        e.preventDefault();

        console.log("Deleting user:", userId);
        setMessage(`User ${userId} deleted successfully.`);
        setUserId("");
    };

    return (
        <div className="delete-users-page">
            <h1 className="delete-users-page-title">Delete Customer</h1>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                    className="delete-user-input"
                    required
                />
                <button type="submit" className="delete-user-button">
                    Delete Customer
                </button>
            </form>
            {message && <div className="delete-user-message">{message}</div>}
        </div>
    );
}

export default DeleteCustomer;
