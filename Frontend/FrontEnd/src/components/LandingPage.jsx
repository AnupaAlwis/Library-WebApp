import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the Library System</h1>
      <button onClick={() => navigate('/admin')} style={{ margin: '10px' }}>
        Admin
      </button>
      <button onClick={() => alert('Redirect to customer page')}>
        Customer
      </button>
    </div>
  );
};

export default LandingPage;
