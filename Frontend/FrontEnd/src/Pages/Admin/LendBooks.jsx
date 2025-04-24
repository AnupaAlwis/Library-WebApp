import React, { useState } from 'react';

export default function LendBook() {
    const [bookId, setBookId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState('');

    const handleLend = async (e) => {
        e.preventDefault();

        if (!bookId || !quantity) {
            setMessage('Please enter both Book ID and Quantity.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/book/lend?id=${bookId}&quantity=${quantity}`, {
                method: 'PUT',
            });

            if (response.ok) {
                setMessage(`Successfully lent ${quantity} book(s) with ID ${bookId}.`);
            } else {
                setMessage(`Failed to lend book. Server responded with status: ${response.status}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Lend Book</h2>
                <form onSubmit={handleLend}>
                    <label className="block mb-2 text-gray-700 font-medium">Book ID:</label>
                    <input
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        placeholder="Enter Book ID"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />

                    <label className="block mb-2 text-gray-700 font-medium">Quantity:</label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Enter Quantity"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
                    >
                        Lend Book
                    </button>
                </form>

                {message && (
                    <div className="mt-4 text-center text-sm text-gray-700">{message}</div>
                )}
            </div>
        </div>
    );
}
