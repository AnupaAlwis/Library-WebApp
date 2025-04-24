import React, { useState } from 'react';

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
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Find User by ID</h2>

            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="flex-1 p-2 border rounded"
                />
                <button
                    onClick={fetchUserDetails}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Find User
                </button>
            </div>

            {error && <p className="text-red-600 mb-4">{error}</p>}

            {userDetails && (
                <table className="w-full border border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Customer ID</th>
                            <th className="border p-2">First Name</th>
                            <th className="border p-2">Last Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Address</th>
                            <th className="border p-2">Fine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">{userDetails.customerId}</td>
                            <td className="border p-2">{userDetails.firstName}</td>
                            <td className="border p-2">{userDetails.lastName}</td>
                            <td className="border p-2">{userDetails.email}</td>
                            <td className="border p-2">{userDetails.address}</td>
                            <td className="border p-2">{userDetails.fine}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FindUser;
