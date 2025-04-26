import React, { useEffect, useState } from 'react';
import '../cssFiles/Admin/GetAllCustomers.css';

export default function AllCustomers() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/customer/all')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setCustomers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch customers.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="admin-page-get-all-customers-page">
            <h1 className="admin-page-show-all-users-title">All Customers</h1>

            {loading ? (
                <p className="text-gray-600">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="overflow-x-auto w-full max-w-6xl">
                    <table className="w-full border-2 border-green-700 rounded-lg overflow-hidden text-white admin-page-table-get-all-users">
                        <thead style={{ backgroundColor: '#000000', color: 'white', fontWeight: 'bold' }}>
                            <tr>
                                <th className="py-3 px-4 text-left font-bold">Customer ID</th>
                                <th className="py-3 px-4 text-left font-bold">First Name</th>
                                <th className="py-3 px-4 text-left font-bold">Last Name</th>
                                <th className="py-3 px-4 text-left font-bold">Email</th>
                                <th className="py-3 px-4 text-left font-bold">Address</th>
                                <th className="py-3 px-4 text-left font-bold">Fine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr
                                    key={customer.customerId}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? '#10262a' : '#000000',
                                        transition: 'background-color 0.3s',
                                    }}
                                    className="border-t hover:bg-green-300"
                                >
                                    <td className="py-2 px-4">{customer.customerId}</td>
                                    <td className="py-2 px-4">{customer.firstName}</td>
                                    <td className="py-2 px-4">{customer.lastName}</td>
                                    <td className="py-2 px-4">{customer.email}</td>
                                    <td className="py-2 px-4">{customer.address}</td>
                                    <td className="py-2 px-4">Rs. {customer.fine.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
