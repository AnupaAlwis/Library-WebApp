import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/customer/register', form);

      // Show success popup
      await Swal.fire({
        title: 'Success!',
        text: 'Customer registered successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      // Reset the form after successful registration
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: '',
        phoneNumber: '',
        fine: 0
      });

    } catch (error) {
      console.error(error);

      // Show error popup
      Swal.fire({
        title: 'Error!',
        text: 'Error registering customer.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div>
      <h3 className="register-user-heading">Register User</h3>
      <form onSubmit={handleSubmit}>
        <div className="register-user-form">

          <div className="input-wrapper">
            <input
              className="input-field"
              name="firstName"
              placeholder=" "
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <label className="floating-label">First Name</label>
          </div>

          <div className="input-wrapper">
            <input
              className="input-field"
              name="lastName"
              placeholder=" "
              value={form.lastName}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Last Name</label>
          </div>

          <div className="input-wrapper">
            <input
              className="input-field"
              name="email"
              type="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Email</label>
          </div>

          <div className="input-wrapper">
            <input
              className="input-field"
              name="address"
              placeholder=" "
              value={form.address}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Address</label>
          </div>

          <div className="input-wrapper">
            <input
              className="input-field"
              name="password"
              type="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Password</label>
          </div>

          <div className="input-wrapper">
            <input
              className="input-field"
              name="phoneNumber"
              placeholder=" "
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Phone Number</label>
          </div>

          <div className="input-wrapper">
            <input
              className="input-field"
              name="fine"
              type="number"
              placeholder=" "
              value={form.fine}
              onChange={handleChange}
            />
            <label className="floating-label">Fine</label>
          </div>

        </div>

        <br />
        <button className="user-register-form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
