import React, { useState } from "react";
import "./Forms.css";
import { toast } from "react-toastify";
import ControlledInput from "../ControlledInput";

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const initialFormData = {
  email: "",
  password: "",
};

function Forms() {
  const [data, setData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  function validateInputs() {
    const newErrors = {};
    const { email, password } = data;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    } else if (password.length > 32) {
      newErrors.password = "Password cannot be longer than 32 characters.";
    }

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // pretend this line submits the data somewhere
    console.log(data);

    const validationErrors = validateInputs();
    setErrors(validationErrors);
    // if the validationErrors object has any properties, then
    // set the errors in state, and exit the function
    if (Object.keys(validationErrors).length) {
      return;
    }
    // toast alert of successful submission
    toast.success("Thank you for your submission, " + data.email + "!");

    // and let's clear the form afterwards
    resetData();
  };

  const resetData = () => setData(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleInputCheck = (e) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      [name]: checked,
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ControlledInput
        type="text"
        label="Email"
        name="email"
        value={data.email}
        error={errors.email}
        onChange={handleInputChange}
      />
      <ControlledInput
        type="password"
        label="Password"
        name="password"
        value={data.password}
        error={errors.password}
        onChange={handleInputChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Forms;
