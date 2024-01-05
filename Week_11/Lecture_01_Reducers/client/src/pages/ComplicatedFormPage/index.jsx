import React, { useEffect, useReducer } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialState = {
  formData: structuredClone(initialFormState),
  errors: structuredClone(initialFormState),
  isSubmitting: false,
  isLoading: true,
  isFormValidated: false,
  showForm: false,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case "SET_ERRORS": {
      newState.errors = action.payload;
      newState.isFormValidated = true;
      newState.isSubmitting = false;
      return newState;
    }
    case "SUBMIT_SUCCESS": {
      newState.formData = structuredClone(initialFormState);
      newState.errors = structuredClone(initialFormState);
      newState.isSubmitting = false;
      newState.showForm = false;
      return newState;
    }
    case "HANDLE_FORM_CHANGE": {
      const { name, value } = action.payload;
      newState.formData[name] = value;
      return newState;
    }
    case "START_SUBMIT": {
      newState.errors = structuredClone(initialFormState);
      newState.isSubmitting = true;
      return newState;
    }
    case "STOP_LOAD": {
      newState.isLoading = false;
      return newState;
    }
    case "START_LOAD": {
      newState.isLoading = true;
      return newState;
    }
    case "SHOW_FORM": {
      newState.showForm = true;
      return newState;
    }
    case "HIDE_FORM": {
      newState.showForm = false;
      newState.formData = initialFormState;
      return newState;
    }
    default: {
      return state;
    }
  }
};

function ComplicatedFormPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) =>
    dispatch({ type: "HANDLE_FORM_CHANGE", payload: e.target });

  const validateFormData = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    const { firstName, lastName, email, password, confirmPassword } =
      state.formData;

    if (!firstName) {
      errors.firstName = "First name is required";
    } else if (firstName.length < 2 || firstName.length > 25) {
      errors.firstName = "First name must be between 2 and 25 characters";
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
    } else if (lastName.length < 2 || lastName.length > 25) {
      errors.lastName = "Last name must be between 2 and 25 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8 || password.length > 35) {
      errors.password = "Password must be between 8 and 35 characters";
    }

    if (!confirmPassword || confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    dispatch({ type: "SET_ERRORS", payload: errors });

    return !Object.keys(errors).some((key) => key !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "START_SUBMIT" });
    const isValid = validateFormData();

    if (!isValid) return;

    dispatch({ type: "SUBMIT_SUCCESS" });
  };

  useEffect(() => {
    setTimeout(() => dispatch({ type: "STOP_LOAD" }), 1000);
  }, []);

  if (state.isLoading)
    return (
      <Container>
        <h3>Loading, please wait...</h3>
      </Container>
    );

  return (
    <>
      <Container>
        <h1>So you want to create an account?</h1>
        <p>
          By creating an account, you'll be able to help save the planet through
          reducing, reusing, and recycling!
        </p>
        <Button onClick={() => dispatch({ type: "SHOW_FORM" })}>
          Create an Account
        </Button>
      </Container>
      <Modal
        show={state.showForm}
        onHide={() => dispatch({ type: "HIDE_FORM" })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Creat an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="firstName">First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                value={state.formData.firstName}
                isInvalid={state.errors.firstName !== ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="lastName">Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                id="lastName"
                value={state.formData.lastName}
                isInvalid={state.errors.lastName !== ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                id="email"
                value={state.formData.email}
                isInvalid={state.errors.email !== ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="password">Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                value={state.formData.password}
                isInvalid={state.errors.password !== ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password:
              </Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={state.formData.confirmPassword}
                isInvalid={state.errors.confirmPassword !== ""}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {state.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-2 d-flex justify-content-between">
              <Button
                type="submit"
                variant="primary"
                disabled={state.isSubmitting}
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="danger"
                disabled={state.isSubmitting}
                onClick={() => dispatch({ type: "HIDE_FORM" })}
              >
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ComplicatedFormPage;
