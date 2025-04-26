import React, { useState } from "react";
import api from "../api";
import '../Pages/cssFiles/Admin/RegisterUserForm.css';

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
            <h3 className="register-user-heading">Add Book</h3>
            <form onSubmit={handleSubmit}>
                <div className="register-user-form">

                    <div className="input-wrapper">
                        <input className="input-field" name="bookName" placeholder=" " onChange={handleChange} required />
                        <label className="floating-label">Book Name</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="isbn" placeholder=" " onChange={handleChange} required />
                        <label className="floating-label">ISBN</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="author" placeholder=" " onChange={handleChange} required />
                        <label className="floating-label">Author</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="price" placeholder=" " onChange={handleChange} />
                        <label className="floating-label">Price</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="quantity" placeholder=" " onChange={handleChange} />
                        <label className="floating-label">Quantity</label>
                    </div>

                </div>

                <br />
                <button className="user-register-form-button" type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooksForm;
