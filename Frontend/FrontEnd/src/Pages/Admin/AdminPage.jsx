import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const AdminPage = () => {
  const navigate = useNavigate();
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Admin Dashboard</h2>
      <button
        onClick={() => navigate('/admin/registerCustomer')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Register User
      </button>
      <button
        onClick={() => navigate('/admin/showAllUsers')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Show All Users
      </button>
      <button
        onClick={() => navigate('/admin/addBooks')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Add Books
      </button>
      <button
        onClick={() => navigate('/admin/deleteCustomers')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Delete Users
      </button>
      <button
        onClick={() => navigate('/admin/getReturns')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Return Books
      </button>
      <button
        onClick={() => navigate('/admin/lendBooks')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Lend Books
      </button>

      <button
        onClick={() => navigate('/admin/getAllBooks')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Get All Books
      </button>

      <button
        onClick={() => navigate('/admin/deleteBook')}
        style={{ margin: '10px' }}
        type="button"
        className="btn btn-info"
      >
        Delete Book
      </button>
      {/* <button onClick={() => setShowForm(true)} style={{ margin: '10px' }}>
        Register User
      </button>
      <button onClick={() => setShowPopup(true)} style={{ margin: '10px' }}>
        Show All Users
      </button> */}


      {/* {showForm && <RegisterForm onClose={() => setShowForm(false)} />}
      {showPopup && <CustomerListPopup onClose={() => setShowPopup(false)} />} */}

    </div>
  );
};

export default AdminPage;