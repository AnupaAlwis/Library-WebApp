import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Import SweetAlert2
import "../cssFiles/Admin/UpdateUser.css"

const UpdateCustomer = () => {
    const [customerId, setCustomerId] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
        fine: ''
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
                // Show success pop-up using SweetAlert2
                Swal.fire({
                    title: 'Success!',
                    text: 'Customer updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

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
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="update-user-form">
                    <h2 className="update-user-title">Update Customer</h2>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="customerId"
                            placeholder=" "
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Customer ID</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="firstName"
                            placeholder=" "
                            value={formData.firstName}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">First Name</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="lastName"
                            placeholder=" "
                            value={formData.lastName}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Last Name</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="email"
                            name="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Email</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="address"
                            placeholder=" "
                            value={formData.address}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Address</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder=" "
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Phone Number</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="number"
                            step="0.01"
                            name="fine"
                            placeholder=" "
                            value={formData.fine}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Fine</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Update Customer
                    </button>
                </div>
            </form>
            {message && (
                <p className="mt-4 text-center text-red-600">{message}</p>
            )}
        </div>
    );
};

export default UpdateCustomer;
