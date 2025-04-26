import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../cssFiles/Admin/DeleteUser.css'; // Import the same CSS file

export default function DeleteCustomer() {
    const [customerId, setcustomerId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!customerId) {
            setMessage('Please enter a User ID.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/customer/delete?id=${customerId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Show success pop-up
                Swal.fire({
                    title: 'Success!',
                    text: `User with ID ${customerId} deleted successfully.`,
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Clear customerId and message after success
                    setcustomerId('');
                    setMessage('');
                });
            } else {
                // Get error data (if any) and show error pop-up
                const errorData = await response.json();
                Swal.fire({
                    title: 'Error!',
                    text: errorData.message || `Failed to delete User. Server responded with status: ${response.status}`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                setMessage(`Failed to delete User. Server responded with status: ${response.status}`);
            }
        } catch (error) {
            // Show error pop-up if the request fails
            Swal.fire({
                title: 'Error!',
                text: `Error User from that ID not found`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="delete-users-page">
            <div className="delete-users-container">
                <h2 className="delete-users-page-title">Delete User</h2>
                <form onSubmit={handleDelete}>
                    <label className="delete-users-page-label">Enter User ID:</label>
                    <input
                        type="text"
                        value={customerId}
                        onChange={(e) => setcustomerId(e.target.value)}
                        placeholder="User ID"
                        className="delete-user-input"
                    />
                    <button
                        type="submit"
                        className="delete-user-button"
                    >
                        Delete User
                    </button>
                </form>
                {message && (
                    <div className="delete-user-message">{message}</div>
                )}
            </div>
        </div>
    );
}
