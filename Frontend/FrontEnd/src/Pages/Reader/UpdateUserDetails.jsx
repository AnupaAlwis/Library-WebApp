import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';  // <--- Import SweetAlert2
import "../cssFiles/Admin/UpdateUser.css";

const UpdateCustomerByCustomer = () => {
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

    useEffect(() => {
        // Get the customerId from localStorage when component mounts
        const storedCustomerId = localStorage.getItem('customerId');
        if (storedCustomerId) {
            setCustomerId(storedCustomerId);
        } else {
            setMessage('Customer ID not found. Please log in again.');
        }
    }, []);

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
            setMessage('Customer ID is missing.');
            return;
        }

        try {
            const res = await fetch(`http://localhost:8080/customer/update?id=${customerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setMessage('Customer updated successfully!');

                // Show SweetAlert2 success popup
                Swal.fire({
                    title: 'Success!',
                    text: 'Customer updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

            } else {
                const errorData = await res.json();
                setMessage(`Error: ${errorData.message || 'Update failed.'}`);

                // Show SweetAlert2 error popup
                Swal.fire({
                    title: 'Error!',
                    text: errorData.message || 'Update failed.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            setMessage('Error: Could not connect to the server.');

            Swal.fire({
                title: 'Error!',
                text: 'Could not connect to the server.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="update-user-form">
                    <h2 className="update-user-title">Update Your Information</h2>

                    {/* First Name */}
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

                    {/* Last Name */}
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

                    {/* Email */}
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

                    {/* Address */}
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

                    {/* Password */}
                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="password"
                            placeholder=" "
                            value={formData.password}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <label className="floating-label">Password</label>
                    </div>

                    {/* Phone Number */}
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

export default UpdateCustomerByCustomer;
