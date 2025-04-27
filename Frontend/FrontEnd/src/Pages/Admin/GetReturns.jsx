import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Import SweetAlert2
import '../cssFiles/Admin/GetReturns.css'; 

export default function BookReturn() {
    const [bookIdentifier, setBookIdentifier] = useState('');
    const [bookQuantity, setBookQuantity] = useState('');
    const [userIdentifier, setUserIdentifier] = useState('');
    const [borrowedDate, setBorrowedDate] = useState('');
    const [notification, setNotification] = useState('');

    const handleReturn = async (e) => {
        e.preventDefault();

        if (!bookIdentifier || !bookQuantity || !userIdentifier || !borrowedDate) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Fields',
                text: 'Please fill out all fields.',
            });
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/book/return?id=${bookIdentifier}&quantity=${bookQuantity}&userId=${userIdentifier}&borrowDate=${borrowedDate}`, {
                method: 'PUT',
            });

            const responseText = await response.text(); // Get the server response text
            console.log(responseText);

            if (response.ok) {
                if (responseText === 'Error Try Again') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Add details correctly',
                    });
                    setNotification('Add details correctly');
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `Successfully returned ${bookQuantity} copy/copies of Book ID ${bookIdentifier}.`,
                    });
                    setNotification(`Successfully returned ${bookQuantity} copy/copies of Book ID ${bookIdentifier}.`);
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Return Failed',
                    text: `Return failed. Server responded with status: ${response.status}`,
                });
                setNotification(`Return failed. Server responded with status: ${response.status}`);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Check details again',
            });
            setNotification('Check details again');
        }
    };

    return (
        <div className="form-container">
            <h3 className="form-heading">Book Return</h3>
            <form className="form-layout" onSubmit={handleReturn}>
                <div className="input-box">
                    <input
                        className="input-area"
                        name="bookIdentifier"
                        value={bookIdentifier}
                        onChange={(e) => setBookIdentifier(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label className="label-text">Book ID</label>
                </div>

                <div className="input-box">
                    <input
                        className="input-area"
                        type="number"
                        name="bookQuantity"
                        min="1"
                        value={bookQuantity}
                        onChange={(e) => setBookQuantity(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label className="label-text">Quantity</label>
                </div>

                <div className="input-box">
                    <input
                        className="input-area"
                        name="userIdentifier"
                        value={userIdentifier}
                        onChange={(e) => setUserIdentifier(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label className="label-text">User ID</label>
                </div>

                <div className="input-box">
                    <input
                        className="input-area date-input"
                        type="date"
                        name="borrowedDate"
                        value={borrowedDate}
                        onChange={(e) => setBorrowedDate(e.target.value)}
                        required
                    />
                    <label className={`label-text ${borrowedDate ? 'focused' : ''}`}>
                        Borrow Date
                    </label>
                </div>

                <div className="button-wrapper">
                    <button className="submit-button" type="submit">Return Book</button>
                </div>
            </form>

            {notification && (
                <div className="message-box">{notification}</div>
            )}
        </div>
    );
}
