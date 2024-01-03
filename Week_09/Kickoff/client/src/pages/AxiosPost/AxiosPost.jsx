import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import api from "../../utils/api.utils";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
  jerseyNum: "",
  birthday: "",
  position: "Center",
};
const AxiosPost = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/players", formData)
      .then((newPlayer) => navigate("/axios/get/" + newPlayer._id))
      .catch((err) => console.error(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <h1>Create a Player</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="jerseyNum">Jersey Number</Form.Label>
          <Form.Control
            type="number"
            id="jerseyNum"
            name="jerseyNum"
            value={formData.jerseyNum}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="birthday">Birthday</Form.Label>
          <Form.Control
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="position">Position</Form.Label>
          <Form.Select
            aria-label="Center"
            id="position"
            name="position"
            onChange={handleInputChange}
            value={formData.position}
          >
            <option value="Center">Center</option>
            <option value="Right Wing">Right Wing</option>
            <option value="Left Wing">Left Wing</option>
            <option value="Defenseman">Defenseman</option>
            <option value="Goalie">Goalie</option>
            <option value="Enforcer">Enforcer</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AxiosPost;
