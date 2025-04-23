import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import CustomerListPopup from './CustomerListPopUp';

const AdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Admin Dashboard</h2>
      <button onClick={() => setShowForm(true)} style={{ margin: '10px' }}>
        Register User
      </button>
      <button onClick={() => setShowPopup(true)} style={{ margin: '10px' }}>
        Show All Users
      </button>
      <button type="button" class="btn btn-primary">Primary</button>


      {showForm && <RegisterForm onClose={() => setShowForm(false)} />}
      {showPopup && <CustomerListPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default AdminPage;
