import React, { useState } from 'react';

const UpdateCustomer = () => {
    const [customerId, setCustomerId] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: '',
        phoneNumber: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!customerId) {
            setMessage('Customer ID is required.');
            return;
        }

        try {
            const res = await fetch(`http://localhost:8080/customer/update?id=${customerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    fine: parseFloat(formData.fine)
                })
            });

            if (res.ok) {
                setMessage('Customer updated successfully!');
            } else {
                const errorData = await res.json();
                setMessage(`Error: ${errorData.message || 'Update failed.'}`);
            }
        } catch (error) {
            setMessage('Error: Could not connect to the server.');
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Update Customer</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="customerId"
                    placeholder="Customer ID"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Update Customer
                </button>
            </form>
            {message && (
                <p className="mt-4 text-center text-red-600">{message}</p>
            )}
        </div>
    );
};

export default UpdateCustomer;
