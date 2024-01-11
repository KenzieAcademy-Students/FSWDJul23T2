import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const initialData = {
  username: "",
  password: "",
};

const SigninPage = () => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signin(data.username, data.password);

    navigate("/dashboard");
  };

  const handleInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  return (
    <Container>
      <h1>Sign In</h1>
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
          <Button type="submit" variant="primary" size="lg">
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SigninPage;
