import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const initialData = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const validateForm = () => {
    const errors = {};
    const { name, email, message } = data;

    if (!name) errors.name = "Name is required.";
    else if (name.length < 2)
      errors.name = "Name must be at least 2 characters.";
    else if (name.length > 30)
      errors.name = "Name cannot be longer than 30 characters.";

    if (!email) errors.email = "Email is required.";

    if (!message) errors.message = "Message is required.";
    setErrors(errors);

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      return;
    }
  };

  const handleInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Container>
      <h1>Leave Contact Info Pls</h1>
      <Row>
        <Col
          as={Form}
          onSubmit={handleSubmit}
          xs={12}
          md={{ span: 6, offset: 3 }}
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              isInvalid={errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              type="text"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              isInvalid={errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              value={data.message}
              onChange={handleInputChange}
              isInvalid={errors.message}
              rows={4}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
