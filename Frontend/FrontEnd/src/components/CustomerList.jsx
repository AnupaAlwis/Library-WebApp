import React, { useEffect, useState } from "react";
import api from "../api";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await api.get("/all");
      setCustomers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>All Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerId}>
            {customer.firstName} {customer.lastName} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
