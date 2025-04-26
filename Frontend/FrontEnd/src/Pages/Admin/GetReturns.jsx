import React, { useState } from 'react';
import '../cssFiles/Admin/RegisterUserForm.css'; 

export default function GetReturns() {
    const [bookId, setBookId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [userId, setUserId] = useState('');
    const [borrowDate, setBorrowDate] = useState('');
    const [message, setMessage] = useState('');

    const handleReturn = async (e) => {
        e.preventDefault();

        if (!bookId || !quantity || !userId || !borrowDate) {
            setMessage('Please enter all fields.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/book/return?id=${bookId}&quantity=${quantity}&userId=${userId}&borrowDate=${borrowDate}`, {
                method: 'PUT',
            });

            if (response.ok) {
                setMessage(`Successfully returned ${quantity} copy/copies of Book ID ${bookId}.`);
            } else {
                setMessage(`Return failed. Server responded with status: ${response.status}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="centered-container">
            <h3 className="register-user-heading">Return Book</h3>
            <form onSubmit={handleReturn}>
                <div className="register-user-form">

                    <div className="input-wrapper">
                        <input
                            className="input-field"
                            name="bookId"
                            value={bookId}
                            onChange={(e) => setBookId(e.target.value)}
                            placeholder=" "
                            required
                        />
                        <label className="floating-label">Book ID</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            className="input-field"
                            type="number"
                            name="quantity"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder=" "
                            required
                        />
                        <label className="floating-label">Quantity</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            className="input-field"
                            name="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            placeholder=" "
                            required
                        />
                        <label className="floating-label">User ID</label>
                    </div>

                    <div className="input-wrapper">
                        <input
                            className="input-field date-input" 
                            type="date"
                            name="borrowDate"
                            value={borrowDate}
                            onChange={(e) => setBorrowDate(e.target.value)}
                            required
                        />
                        <label className={`floating-label ${borrowDate ? 'floating-label-focused' : ''}`}>
                            Borrow Date
                        </label>
                    </div>

                </div>

                <br />
                <div className="button-container">
                    <button className="user-register-form-button" type="submit">Return Book</button>
                </div>
            </form>

            {message && (
                <div className="mt-4 text-center text-sm text-gray-700">{message}</div>
            )}
        </div>
    );
}