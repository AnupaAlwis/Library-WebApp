import React, { useState } from "react";
import api from "../api";
import Swal from 'sweetalert2'; 
import '../Pages/cssFiles/Admin/RegisterUserForm.css';

const AddBooksForm = () => { // <-- Removed onSuccess
    const [formData, setFormData] = useState({
        bookName: "",
        isbn: "",
        author: "",
        price: "",
        quantity: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/book/add", formData);

            Swal.fire({
                title: 'Success!',
                text: 'Book added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            // Reset form after success
            setFormData({
                bookName: "",
                isbn: "",
                author: "",
                price: "",
                quantity: ""
            });

        } catch (err) {
            console.error(err);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add book.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>
            <h3 className="register-user-heading">Add Book</h3>
            <form onSubmit={handleSubmit}>
                <div className="register-user-form">

                    <div className="input-wrapper">
                        <input className="input-field" name="bookName" placeholder=" " value={formData.bookName} onChange={handleChange} required />
                        <label className="floating-label">Book Name</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="isbn" placeholder=" " value={formData.isbn} onChange={handleChange} required />
                        <label className="floating-label">ISBN</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="author" placeholder=" " value={formData.author} onChange={handleChange} required />
                        <label className="floating-label">Author</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="price" type="number" placeholder=" " value={formData.price} onChange={handleChange} />
                        <label className="floating-label">Price</label>
                    </div>

                    <div className="input-wrapper">
                        <input className="input-field" name="quantity" type="number" placeholder=" " value={formData.quantity} onChange={handleChange} />
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
