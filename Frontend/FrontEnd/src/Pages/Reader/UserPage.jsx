import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../cssFiles/Admin/LandingPage.css'

const UserPage = () => {
    const navigate = useNavigate();


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 className='landing-page-title'>User Dashboard</h2>

            <button
                onClick={() => navigate('/admin/getAllBooks')}
                style={{ margin: '10px' }}
                type="button"
                className='admin-btn'
            >
                Get All Books
            </button>

            <button
                onClick={() => navigate('/admin/searchByBookName')}
                style={{ margin: '10px' }}
                type="button"
                className='admin-btn'
            >
                Search Book
            </button>

            <button
                onClick={() => navigate('/user/updateUserByUser')}
                style={{ margin: '10px' }}
                type="button"
                className='admin-btn'
            >
                Update User
            </button>


        </div>
    );
};

export default UserPage;