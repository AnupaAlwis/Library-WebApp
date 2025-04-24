import React, { useState } from 'react';

export default function DeleteBook() {
    const [bookId, setBookId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!bookId) {
            setMessage('Please enter a user ID.');
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
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Delete Book</h2>
                <form onSubmit={handleDelete}>
                    <label className="block mb-2 font-medium text-gray-700">Enter Book ID:</label>
                    <input
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        placeholder="Book ID"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
                    >
                        Delete Book
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-sm text-gray-700">{message}</div>
                )}
            </div>
        </div>
    );
}
