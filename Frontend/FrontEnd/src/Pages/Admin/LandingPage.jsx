import React from "react";
import { useNavigate } from 'react-router-dom';



function LandingPage() {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Welcome to the Library System!</h1>
            <button
                onClick={() => navigate('/admin')}
                style={{ margin: '10px' }}
                type="button"
                className="btn btn-info"
            >
                Admin
            </button>
        
            <button
                onClick={() => navigate('/customer')}
                style={{ margin: '10px' }}
                type="button"
                className="btn btn-info"
            >
                Customer
            </button>
        </div>
    )
}

export default LandingPage;