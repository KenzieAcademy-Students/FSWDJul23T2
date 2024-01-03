import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import api from "../utils/api.config";

const initialState = {
  teamName: "",
  location: "",
  abbreviation: "",
  isActive: true,
  yearEstablished: "",
};

function CreateTeamPage() {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/teams", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheck = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  return (
    <Container>
      <h1>Create a Team</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="teamName">Team Name: </Form.Label>
          <Form.Control
            id="teamName"
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="location">Location: </Form.Label>
          <Form.Control
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="abbreviation">Abbreviation: </Form.Label>
          <Form.Control
            id="abbreviation"
            type="text"
            name="abbreviation"
            value={formData.abbreviation}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="isActive">Active: </Form.Label>
          <Form.Check
            id="isActive"
            name="isActive"
            checked={formData.isActive}
            onChange={handleCheck}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="yearEstablished">Year Established: </Form.Label>
          <Form.Control
            type="number"
            name="yearEstablished"
            value={formData.yearEstablished}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default CreateTeamPage;
