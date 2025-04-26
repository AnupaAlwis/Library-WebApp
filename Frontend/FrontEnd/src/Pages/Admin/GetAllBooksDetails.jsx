import React, { useState, useEffect } from 'react';
import '../cssFiles/Admin/GetAllCustomers.css'; // Reuse the same CSS file

export default function GetAllBooks() {
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState('');
    
    // Fetch books when the page loads
    useEffect(() => {
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

        fetchBooks();
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return (
        <div className="admin-page-get-all-customers-page">
            <h1 className="admin-page-show-all-users-title">All Book Details</h1>

            {message && <p className="text-center text-red-600 mb-4">{message}</p>}

            {books.length > 0 ? (
                <div className="overflow-x-auto w-full max-w-6xl">
                    <table className="w-full border-2 border-green-700 rounded-lg overflow-hidden text-white admin-page-table-get-all-users">
                        <thead style={{ backgroundColor: '#000000', color: 'white', fontWeight: 'bold' }}>
                            <tr>
                                <th className="py-3 px-4 text-left font-bold">Book ID</th>
                                <th className="py-3 px-4 text-left font-bold">Name</th>
                                <th className="py-3 px-4 text-left font-bold">Author</th>
                                <th className="py-3 px-4 text-left font-bold">ISBN</th>
                                <th className="py-3 px-4 text-left font-bold">Price</th>
                                <th className="py-3 px-4 text-left font-bold">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr
                                    key={book.bookId}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? '#10262a' : '#000000',
                                        transition: 'background-color 0.3s',
                                    }}
                                    className="border-t hover:bg-green-300"
                                >
                                    <td className="py-2 px-4">{book.bookId}</td>
                                    <td className="py-2 px-4">{book.bookName}</td>
                                    <td className="py-2 px-4">{book.author}</td>
                                    <td className="py-2 px-4">{book.isbn}</td>
                                    <td className="py-2 px-4">Rs. {book.price.toFixed(2)}</td>
                                    <td className="py-2 px-4">{book.quantity ?? 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                !message && (
                    <p className="text-center text-gray-400 mt-6">No books fetched yet.</p>
                )
            )}
        </div>
    );
}
