import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../cssFiles/Admin/DeleteUser.css'; // Import the same CSS file

export default function DeleteBook() {
    const [bookId, setBookId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!bookId) {
            setMessage('Please enter a book ID.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/book/delete?id=${bookId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Show success pop-up
                Swal.fire({
                    title: 'Success!',
                    text: `Book with ID ${bookId} deleted successfully.`,
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Clear bookId and message after success
                    setBookId('');
                    setMessage('');
                });
            } else {
                // Get error data (if any) and show error pop-up
                const errorData = await response.json();
                Swal.fire({
                    title: 'Error!',
                    text: 'Error Book with that ID not found',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                setMessage(`Failed to delete book. Server responded with status: ${response.status}`);
            }
        } catch (error) {
            // Show error pop-up if the request fails
            Swal.fire({
                title: 'Error!',
                text: `Error: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="delete-users-page">
            <div className="delete-users-container">
                <h2 className="delete-users-page-title">Delete Book</h2>
                <form onSubmit={handleDelete}>
                    <label className="delete-users-page-label">Enter Book ID:</label>
                    <input
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        placeholder="Book ID"
                        className="delete-user-input"
                    />
                    <button
                        type="submit"
                        className="delete-user-button"
                    >
                        Delete Book
                    </button>
                </form>
                {message && (
                    <div className="delete-user-message">{message}</div>
                )}
            </div>
        </div>
    );
}
