import React, { useEffect, useState } from 'react';

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
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">All Customers</h1>

            {loading ? (
                <p className="text-gray-600">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="overflow-x-auto w-full max-w-6xl">
                    <table className="min-w-full bg-white border rounded-xl shadow-md">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Customer ID</th>
                                <th className="py-3 px-4 text-left">First Name</th>
                                <th className="py-3 px-4 text-left">Last Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Address</th>
                                <th className="py-3 px-4 text-left">Fine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.customerId} className="border-t hover:bg-gray-50">
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
