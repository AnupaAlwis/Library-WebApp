import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../cssFiles/Admin/RegisterUserForm.css';

export default function LendBook() {
    const [bookId, setBookId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState('');

    const handleLend = async (e) => {
        e.preventDefault();

        if (!bookId || !quantity) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter both Book ID and Quantity.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/book/lend?id=${bookId}&quantity=${quantity}`, {
                method: 'PUT',
            });

            const contentType = response.headers.get('content-type');
            let responseData;

            if (contentType && contentType.includes('application/json')) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }

            if (response.ok) {
                if (typeof responseData === 'string' && (responseData.toLowerCase().includes("error") || responseData.toLowerCase().includes("not enough"))) {
                    Swal.fire({
                        title: 'Error!',
                        text: responseData, // Show backend error message exactly
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                } else {
                    Swal.fire({
                        title: 'Success!',
                        text: `Successfully lent ${quantity} book(s) with ID ${bookId}.`,
                        icon: 'success',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        setBookId('');
                        setQuantity('');
                    });
                }
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: `Failed: ${responseData}`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: `Network or server error occurred.`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
            console.error(error);
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
