import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Week 9 Kickoff
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav>
            <Nav.Link as={Link} to="/axios">
              Axios
            </Nav.Link>
            <Nav.Link as={Link} to="/axios/config">
              Axios Config
            </Nav.Link>
            <NavDropdown title="Axios Calls">
              <NavDropdown.Item as={Link} to="/axios/get">
                GET
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/axios/post">
                POST
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/axios/put">
                PUT
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/axios/delete">
                DELETE
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
