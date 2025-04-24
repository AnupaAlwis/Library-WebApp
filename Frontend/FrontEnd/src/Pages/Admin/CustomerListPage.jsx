import React, { useState } from "react";
import CustomerListPopup from "../../components/CustomerListPopUp";

const CustomerListPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Get User List</h1>

      <button
        onClick={() => setShowPopup(true)}
        style={{ padding: "10px 20px", margin: "10px" }}
      >
        Show User List
      </button>

      {showPopup && <CustomerListPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default CustomerListPage;
