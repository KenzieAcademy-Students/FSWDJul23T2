import React, { useState } from "react";
import { ControlledInput } from "../../components";

const initialData = {
  email: "",
  password: "",
  confirmPassword: "",
};

function SignupPage({ handleSignup }) {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(data.email, data.password, data.confirmPassword);
  };

  return (
    <div className="container">
      <h1>Sign Up to view Salaries</h1>
      <form onSubmit={handleSubmit}>
        <ControlledInput
          type="text"
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <ControlledInput
          type="password"
          label="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <ControlledInput
          type="confirmPassword"
          label="Confirm Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignupPage;
