import React, { useState } from 'react';
import '../cssFiles/Admin/FindUserById.css';

const FindUser = () => {
    const [userId, setUserId] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState('');

    const fetchUserDetails = async () => {
        if (!userId) {
            setError('User ID is required.');
            return;
        }

        try {
            const res = await fetch(`http://localhost:8080/customer/details?id=${userId}`);
            if (!res.ok) {
                throw new Error('User not found');
            }
            const data = await res.json();
            setUserDetails(data);
            setError('');
        } catch (err) {
            setUserDetails(null);
            setError(err.message);
        }
    };

    return (
        <div className="find-user-page">
            <div className="find-user-container">
                <h2 className="find-user-title">Find User by ID</h2>

                <div className="find-user-input-group">
                    <input
                        type="text"
                        placeholder="Enter User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="find-user-input"
                    />
                    <button
                        onClick={fetchUserDetails}
                        className="find-user-button"
                    >
                        Find User
                    </button>
                </div>

                {error && <p className="find-user-error">{error}</p>}

                {userDetails && (
                    <div className="find-user-table-container">
                        <table className="find-user-table">
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Fine</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{userDetails.customerId}</td>
                                    <td>{userDetails.firstName}</td>
                                    <td>{userDetails.lastName}</td>
                                    <td>{userDetails.email}</td>
                                    <td>{userDetails.address}</td>
                                    <td>{userDetails.fine}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindUser;
