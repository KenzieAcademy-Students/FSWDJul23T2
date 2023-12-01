import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
};

const RegisterPage = ({ registerUser }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData.name, formData.email);
    navigate("/dashboard");
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input className="product-select" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
