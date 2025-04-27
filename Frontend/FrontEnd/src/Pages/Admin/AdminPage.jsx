import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import "../cssFiles/Admin/AdminPage.css";


const AdminPage = () => {
  const navigate = useNavigate();


  return (
    <div className='admin-page'>
      <h1 className='admin-page-title'>Welcome to Admin Page</h1>
      <div className="admin-page-user-panel">
        <div className="admin-page-user-panel-title">User Panel</div>
        <div className='admin-page-user-panel-button-section'>

          <button
            onClick={() => navigate('/admin/registerCustomer')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Register User
          </button>

          <button
            onClick={() => navigate('/admin/updateUser')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Update User
          </button>

          <button
            onClick={() => navigate('/admin/showAllUsers')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Show All Users
          </button>

          <button
            onClick={() => navigate('/admin/deleteCustomers')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Delete Users
          </button>

          <button
            onClick={() => navigate('/admin/getUserById')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Find User
          </button>

        </div>

      </div>


      <div className='admin-page-book-panel'>
        <div className="admin-page-book-panel-title">Book Panel</div>
        <div className="admin-page-book-panel-button-section">
          <button
            onClick={() => navigate('/admin/addBooks')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Add Books
          </button>

          <button
            onClick={() => navigate('/admin/getReturns')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Return Books
          </button>

          <button
            onClick={() => navigate('/admin/lendBooks')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Lend Books
          </button>

          <button
            onClick={() => navigate('/admin/getAllBooks')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Get All Books
          </button>

          <button
            onClick={() => navigate('/admin/deleteBook')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Delete Book
          </button>

          <button
            onClick={() => navigate('/admin/searchByBookName')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Search Book
          </button>

          <button
            onClick={() => navigate('/admin/updateBooks')}
            style={{ margin: '10px' }}
            type="button"
            className="admin-page-button"
          >
            Update Book
          </button>

        </div>


      </div>


    </div>
  );
};

export default AdminPage;