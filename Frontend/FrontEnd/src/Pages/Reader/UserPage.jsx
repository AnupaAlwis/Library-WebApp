import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const UserPage = () => {
    const navigate = useNavigate();


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>User Dashboard</h2>

            <button
                onClick={() => navigate('/admin/getAllBooks')}
                style={{ margin: '10px' }}
                type="button"
                className="btn btn-info"
            >
                Get All Books
            </button>

            <button
                onClick={() => navigate('/admin/searchByBookName')}
                style={{ margin: '10px' }}
                type="button"
                className="btn btn-info"
            >
                Search Book
            </button>

            <button
                onClick={() => navigate('/user/updateUserByUser')}
                style={{ margin: '10px' }}
                type="button"
                className="btn btn-info"
            >
                Update User
            </button>


        </div>
    );
};

export default UserPage;