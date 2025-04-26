import React, { useState } from 'react';
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
                setMessage(`Book with ID ${bookId} deleted successfully.`);
            } else {
                setMessage(`Failed to delete book. Server responded with status: ${response.status}`);
            }
        } catch (error) {
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
