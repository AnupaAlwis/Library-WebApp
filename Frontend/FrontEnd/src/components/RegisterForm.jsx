import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onClose }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    phoneNumber: '',
    fine: 0
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/customer/register', form);
      alert('Customer registered!');
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error registering customer.');
    }
  };

  return (
    <div>
      <h3>Register User</h3>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
        <input name="fine" placeholder="Fine" type="number" onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default RegisterForm;
