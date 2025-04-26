import React, { useState } from 'react';
import '../cssFiles/Admin/RegisterUserForm.css'

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
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 className="register-user-heading">Lend Book</h2>
            <form onSubmit={handleLend} className="register-user-form">
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        placeholder="Enter Book ID"
                        className="input-field"
                    />
                    <label className="floating-label">Book ID</label>
                </div>

                <div className="input-wrapper">
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Enter Quantity"
                        className="input-field"
                    />
                    <label className="floating-label">Quantity</label>
                </div>

                <button
                    type="submit"
                    className="user-register-form-button"
                >
                    Lend Book
                </button>
            </form>

            {message && (
                <div style={{ marginTop: "20px", color: "white" }}>{message}</div>
            )}
        </div>
    );
}
