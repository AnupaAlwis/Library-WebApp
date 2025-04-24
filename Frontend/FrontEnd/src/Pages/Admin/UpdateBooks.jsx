import React, { useState } from "react";

export default function UpdateBook() {
    const [bookId, setBookId] = useState("");
    const [bookDetails, setBookDetails] = useState({
        bookName: "",
        isbn: "",
        author: "",
        price: "",
        quantity:""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setBookDetails({
            ...bookDetails,
            [e.target.name]:
                e.target.name === "price" ? parseFloat(e.target.value) : e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!bookId) {
            setMessage("Please enter the Book ID.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:8080/book/update?id=${bookId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bookDetails),
                }
            );

            if (response.ok) {
                setMessage("Book details updated successfully.");
            } else {
                setMessage(
                    `Failed to update. Server responded with status: ${response.status}`
                );
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">
                    Update Book Details
                </h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 font-medium text-gray-700">
                        Book ID:
                    </label>
                    <input
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        placeholder="Enter Book ID"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />

                    <label className="block mb-2 font-medium text-gray-700">
                        Book Name:
                    </label>
                    <input
                        type="text"
                        name="bookName"
                        value={bookDetails.bookName}
                        onChange={handleChange}
                        placeholder="Book Name"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />

                    <label className="block mb-2 font-medium text-gray-700">ISBN:</label>
                    <input
                        type="text"
                        name="isbn"
                        value={bookDetails.isbn}
                        onChange={handleChange}
                        placeholder="ISBN"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />

                    <label className="block mb-2 font-medium text-gray-700">
                        Author:
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={bookDetails.author}
                        onChange={handleChange}
                        placeholder="Author Name"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />

                    <label className="block mb-2 font-medium text-gray-700">
                        Price (in cents):
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={bookDetails.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />
                     <label className="block mb-2 font-medium text-gray-700">
                        Quantity:
                    </label>
                    <input
                        type="text"
                        name="quantity"
                        value={bookDetails.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        className="w-full px-4 py-2 border rounded-lg mb-4"
                    />

                    <button
                        type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
                    >
                        Update Book
                    </button>
                </form>

                {message && (
                    <div className="mt-4 text-center text-sm text-gray-700">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}
