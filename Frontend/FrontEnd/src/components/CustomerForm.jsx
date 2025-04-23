import React, { useState } from "react";
import api from "../api";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    phoneNumber: "",
    fine: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/customer/register", formData);
      alert("Customer registered successfully!");
    } catch (err) {
      console.error(err);
      alert("Error registering customer.");
    }
  };

  return (
    <div>
      <h2>Register Customer</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
        <input name="fine" type="number" placeholder="Fine" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CustomerForm;
