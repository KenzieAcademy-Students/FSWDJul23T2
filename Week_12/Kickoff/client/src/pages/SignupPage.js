import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const initialData = {
  username: "",
  password: "",
  confirmPassword: "",
};

const SignupPage = () => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(data.username, data.password, data.confirmPassword);
  };

  const handleInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Container>
      <h1>Create an account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="username"
            value={data.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary" size="lg">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignupPage;
