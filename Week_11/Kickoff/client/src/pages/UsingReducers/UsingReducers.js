import React, { useContext } from "react";
import { useReducer } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useForms from "../../hooks/useForms";
import authContext from "../../contexts/authContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const UsingReducers = () => {
  const {
    formData,
    isSubmitting,
    startSubmit,
    stopSubmit,
    dispatch,
    handleChange,
    resetForm,
  } = useForms(initialState);

  const { loginUser } = useContext(authContext);
  const navigate = useNavigate();

  const validateSignupForm = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    const errors = {};
    let isValid = true;
    if (!firstName.value) {
      errors.firstName = "First name is required";
      isValid = false;
    } else if (firstName.value.length < 2 || firstName.value.length > 30) {
      errors.firstName = "First name must be between 2 and 30 characters";
      isValid = false;
    } else errors.firstName = "";

    if (!lastName.value) {
      errors.lastName = "Last name is required.";
      isValid = false;
    } else if (lastName.value.length < 2 || lastName.value.length > 30) {
      errors.lastName = "Last name must be between 2 and 30 characters";
      isValid = false;
    } else errors.lastName = "";

    dispatch({ name: "SET_ERRORS", payload: errors });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startSubmit();

    if (!validateSignupForm(formData)) {
      stopSubmit();
      return;
    }

    try {
      // pretend we're making an axios call or something
      // and we get a response
      loginUser(formData);
      toast.success("Thanks for signing up, " + formData.firstName.value + "!");
      navigate("/");
      stopSubmit();
      dispatch({ name: "RESET_FORM" });
    } catch (error) {
      stopSubmit();
    }
  };

  const { firstName, lastName, email, password, confirmPassword } = formData;
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            autoComplete="off"
            id="firstName"
            name="firstName"
            value={firstName.value}
            isInvalid={firstName.error}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {firstName.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            autoComplete="off"
            id="lastName"
            name="lastName"
            value={lastName.value}
            isInvalid={lastName.error}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {lastName.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            autoComplete="off"
            id="email"
            name="email"
            value={email.value}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {email.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={password.value}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {password.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="confirmPassword">Password</Form.Label>
          <Form.Control
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword.value}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {confirmPassword.error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Button type="button" variant="danger" size="sm" onClick={resetForm}>
            Reset
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UsingReducers;
