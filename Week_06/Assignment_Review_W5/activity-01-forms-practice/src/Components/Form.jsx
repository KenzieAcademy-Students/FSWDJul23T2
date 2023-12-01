import { useState } from "react";
import "./Form.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  error: "",
};

const VALID_NAME_REGEX = /[a-zA-Z\-\']/;

const Form = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((currData) => ({ ...currData, error: "" }));

    if (
      !VALID_NAME_REGEX.test(formData.firstName) ||
      !VALID_NAME_REGEX.test(formData.lastName)
    ) {
      setFormData((currData) => ({
        ...currData,
        error:
          "First and last name cannot include numbers or special characters other than - or '",
      }));
      return;
    }

    alert(`Thank you for your submission. Your Info Summary:
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone Number: ${formData.phone}
      Message: ${formData.message}
    `);

    setFormData(initialState);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          required
          minLength={2}
          maxLength={50}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          required
          minLength={2}
          maxLength={50}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="you@provider.com"
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          placeholder="(XXX)-XXX-XXXX"
          type="tel"
          name="phone"
          value={formData.phone}
          required
          pattern="\(\d{3}\)-\d{3}-\d{4}"
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          placeholder="Message"
          type="text"
          name="message"
          value={formData.message}
          required
          minLength={10}
          maxLength={500}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
      {formData.error && <p style={{ color: "red" }}>{formData.error}</p>}
    </form>
  );
};

export default Form;
