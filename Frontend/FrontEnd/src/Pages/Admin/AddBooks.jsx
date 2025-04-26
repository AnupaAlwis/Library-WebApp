import React, { useState } from "react";
import AddBooksForm from "../../components/AddBooksForm";

const AddBooks = () => {
  const [showForm, setShowForm] = useState(true); // Default: true

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {showForm && <AddBooksForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default AddBooks;
