import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Admin/LandingPage";
import AdminPage from "./Pages/Admin/AdminPage";
import CustomerPage from "./Pages/Admin/CustomerPage";
import CustomerAddPage from "./Pages/Admin/RegiseterUserPage";
import CustomerListPage from "./Pages/Admin/CustomerListPage";
import AddBooks from "./Pages/Admin/AddBooks";
import DeleteCustomer from "./Pages/Admin/DeleteCustomers";
import GetReturns from "./Pages/Admin/GetReturns";
import LendBooks from "./Pages/Admin/LendBooks";
import UpdateBook from "./Pages/Admin/UpdateBooks";
import GetAllBooks from "./Pages/Admin/GetAllBooksDetails";
import DeleteBook from "./Pages/Admin/DeleteBook";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/customer" element={<CustomerPage />} />
      <Route path="/admin/registerCustomer" element={<CustomerAddPage />} />
      <Route path="/admin/showAllUsers" element={<CustomerListPage />} />
      <Route path="/admin/addBooks" element={<AddBooks />} />
      <Route path="/admin/deleteCustomers" element={<DeleteCustomer />} />
      <Route path="/admin/getReturns" element={<GetReturns />} />
      <Route path="/admin/lendBooks" element={<LendBooks />} />
      <Route path="/admin/updateBooks" element={<UpdateBook />} />
      <Route path="/admin/getAllBooks" element={<GetAllBooks/>}/>
      <Route path="/admin/deleteBook" element = {<DeleteBook/>}/>
    </Routes>
  </Router>
);

export default App;
