import React, { useState } from 'react';
import axios from 'axios';
import '../Pages/cssFiles/Admin/RegisterUserForm.css';

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
      <h3 className="register-user-heading">Register User</h3>
      <form onSubmit={handleSubmit}>
        <div className="register-user-form">

          <div className="input-wrapper">
            <input className="input-field" name="firstName" placeholder=" " onChange={handleChange} required />
            <label className="floating-label">First Name</label>
          </div>

          <div className="input-wrapper">
            <input className="input-field" name="lastName" placeholder=" " onChange={handleChange} required />
            <label className="floating-label">Last Name</label>
          </div>

          <div className="input-wrapper">
            <input className="input-field" name="email" type="email" placeholder=" " onChange={handleChange} required />
            <label className="floating-label">Email</label>
          </div>

          <div className="input-wrapper">
            <input className="input-field" name="address" placeholder=" " onChange={handleChange} required />
            <label className="floating-label">Address</label>
          </div>

          <div className="input-wrapper">
            <input className="input-field" name="password" type="password" placeholder=" " onChange={handleChange} required />
            <label className="floating-label">Password</label>
          </div>

          <div className="input-wrapper">
            <input className="input-field" name="phoneNumber" placeholder=" " onChange={handleChange} required />
            <label className="floating-label">Phone Number</label>
          </div>

          <div className="input-wrapper">
            <input className="input-field" name="fine" type="number" placeholder=" " onChange={handleChange} />
            <label className="floating-label">Fine</label>
          </div>

        </div>

        <br />
        <button className='user-register-form-button' type="submit">Submit</button>
        <button className='user-register-form-button' type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default RegisterForm;
