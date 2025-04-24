import React, { useState } from 'react';

export default function GetAllBooks() {
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState('');

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8080/book/all');

            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }

            const data = await response.json();
            setBooks(data);
            setMessage('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen p-6 bg-blue-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">All Book Details</h2>
                <div className="flex justify-center mb-4">
                    <button
                        onClick={fetchBooks}
                        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300"
                    >
                        Get All Book Details
                    </button>
                </div>

                {message && <p className="text-center text-red-600 mb-4">{message}</p>}

                {books.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-md">
                            <thead className="bg-blue-100">
                                <tr>
                                    <th className="px-4 py-2">Book ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Author</th>
                                    <th className="px-4 py-2">ISBN</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.bookId} className="text-center border-t">
                                        <td className="px-4 py-2">{book.bookId}</td>
                                        <td className="px-4 py-2">{book.bookName}</td>
                                        <td className="px-4 py-2">{book.author}</td>
                                        <td className="px-4 py-2">{book.isbn}</td>
                                        <td className="px-4 py-2">{book.price}</td>
                                        <td className="px-4 py-2">{book.quantity ?? 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {books.length === 0 && !message && (
                    <p className="text-center text-gray-500 mt-6">No books fetched yet.</p>
                )}
            </div>
        </div>
    );
}
