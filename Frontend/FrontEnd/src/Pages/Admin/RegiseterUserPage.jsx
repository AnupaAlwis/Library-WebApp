import React, { useState } from "react";
import RegisterForm from "../../components/RegisterForm";

const RegisterUserPage = () => {
  const [showForm, setShowForm] = useState(true); // Default: true

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {showForm && <RegisterForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default RegisterUserPage;
