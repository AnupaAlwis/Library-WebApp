import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Admin/LandingPage";
import AdminPage from "./Pages/Admin/AdminPage";
import CustomerPage from "./Pages/Admin/CustomerPage";
import CustomerAddPage from "./Pages/Admin/RegiseterUserPage";
import CustomerListPage from "./Pages/Admin/CustomerGetAll";
import AddBooks from "./Pages/Admin/AddBooks";
import DeleteCustomer from "./Pages/Admin/DeleteCustomers";
import GetReturns from "./Pages/Admin/GetReturns";
import LendBooks from "./Pages/Admin/LendBooks";
import UpdateBook from "./Pages/Admin/UpdateBooks";
import GetAllBooks from "./Pages/Admin/GetAllBooksDetails";
import DeleteBook from "./Pages/Admin/DeleteBook";
import SearchByBookName from "./Pages/Admin/SearchByBookName";
import FindUser from "./Pages/Admin/GetUserByID";
import UpdateCustomer from "./Pages/Admin/UpdateUser";
import UserPage from "./Pages/Reader/UserPage";
import AllCustomers from "./Pages/Admin/CustomerGetAll";
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/customer" element={<UserPage />} />
      <Route path="/admin/registerCustomer" element={<CustomerAddPage />} />
      <Route path="/admin/showAllUsers" element={<AllCustomers />} />
      <Route path="/admin/addBooks" element={<AddBooks />} />
      <Route path="/admin/deleteCustomers" element={<DeleteCustomer />} />
      <Route path="/admin/getReturns" element={<GetReturns />} />
      <Route path="/admin/lendBooks" element={<LendBooks />} />
      <Route path="/admin/updateBooks" element={<UpdateBook />} />
      <Route path="/admin/getAllBooks" element={<GetAllBooks/>}/>
      <Route path="/admin/deleteBook" element = {<DeleteBook/>}/>
      <Route path="/admin/searchByBookName" element = {<SearchByBookName/>}/>
      <Route path="/admin/getUserById" element = {<FindUser/>}/> 
      <Route path="/admin/updateUser" element={<UpdateCustomer/>}/>
      <Route path="/user/updateUserByUser" element={<UpdateCustomer/>}/>
    </Routes>
  </Router>
);

export default App;
