import React, { useState } from "react";
import "../cssFiles/Admin/UpdateUser.css"; // Importing the same CSS

export default function UpdateBook() {
    const [bookId, setBookId] = useState("");
    const [bookDetails, setBookDetails] = useState({
        bookName: "",
        isbn: "",
        author: "",
        price: "",
        quantity: ""
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
        <div className="p-6 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="update-user-form">
                    <h2 className="update-user-title">Update Book</h2>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="bookId"
                            placeholder=" "
                            value={bookId}
                            onChange={(e) => setBookId(e.target.value)}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Book ID</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="bookName"
                            placeholder=" "
                            value={bookDetails.bookName}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Book Name</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="isbn"
                            placeholder=" "
                            value={bookDetails.isbn}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">ISBN</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="author"
                            placeholder=" "
                            value={bookDetails.author}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Author</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="number"
                            name="price"
                            placeholder=" "
                            value={bookDetails.price}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Price (in cents)</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="number"
                            name="quantity"
                            placeholder=" "
                            value={bookDetails.quantity}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Quantity</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Update Book
                    </button>
                </div>
            </form>

            {message && (
                <p className="mt-4 text-center text-red-600">{message}</p>
            )}
        </div>
    );
}
