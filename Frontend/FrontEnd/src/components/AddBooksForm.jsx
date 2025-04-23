import React, { useState } from "react";
import api from "../api";

const AddBooksForm = () => {
    const [formData, setFormData] = useState({
        bookName: "",
        isbn: "",
        author: "",
        price: 0,
        quantity: 0
        
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/book/add", formData);
            alert("Book added successfully!");
        } catch (err) {
            console.error(err);
            alert("Error adding book.");
        }
    };

    return (
        <div>
            <h2>Register Customer</h2>
            <form onSubmit={handleSubmit}>
                <input name="bookName" placeholder="Book Name" onChange={handleChange} required />
                <input name="isbn" placeholder="ISBN" onChange={handleChange} required />
                <input name="author" placeholder="Author" onChange={handleChange} required />
                <input name="price" placeholder="Price" onChange={handleChange} />
                <input name="quantity" placeholder="Quantity" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AddBooksForm;
