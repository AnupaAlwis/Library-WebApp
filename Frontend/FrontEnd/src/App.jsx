import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AdminPage from './Pages/AdminPage';
import CustomerPage from './Pages/CustomerPage';
import CustomerAddPage from './Pages/RegiseterUserPage';
import CustomerListPage from './Pages/CustomerListPage';
import AddBooks from './Pages/AddBooks';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/customer" element={<CustomerPage />} />
      <Route path="/admin/registerCustomer" element={<CustomerAddPage />} />
      <Route path="/admin/showAllUsers" element={<CustomerListPage />} />
      <Route path="/admin/addBooks" element={<AddBooks />} />
    </Routes>
  </Router>
);

export default App;
