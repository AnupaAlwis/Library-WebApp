import React, { useState } from "react";
import AddBooksForm from "../../components/AddBooksForm";

const AddBooks = () => {
  const [showForm, setShowForm] = useState(true); // Default: true

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Register New User</h1>
      {showForm && <AddBooksForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default AddBooks;
