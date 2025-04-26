import React, { useState } from 'react';
import '../cssFiles/Admin/DeleteUser.css';

export default function DeleteCustomer() {
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!userId) {
            setMessage('Please enter a user ID.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/customer/delete?id=${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMessage(`Customer with ID ${userId} deleted successfully.`);
            } else {
                setMessage(`Failed to delete customer. Server responded with status: ${response.status}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="delete-users-page">
            <div className="delete-users-container">
                <h2 className="delete-users-page-title">Delete Customer</h2>
                <form onSubmit={handleDelete}>
                    <label className="delete-users-page-label">Enter User ID:</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="User ID"
                        className="delete-user-input"
                    />
                    <button
                        type="submit"
                        className="delete-user-button"
                    >
                        Delete Customer
                    </button>
                </form>
                {message && (
                    <div className="delete-user-message">{message}</div>
                )}
            </div>
        </div>
    );
}
