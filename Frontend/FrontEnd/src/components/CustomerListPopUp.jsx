import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerListPopup = ({ onClose }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/customer/all')
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{
      position: 'fixed', top: '20%', left: '30%',
      backgroundColor: 'white', padding: '20px', border: '1px solid black'
    }}>
      <h3>All Customers</h3>
      <ul>
        {customers.map(c => (
          <li key={c.customerId}>{c.firstName} {c.lastName}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CustomerListPopup;
