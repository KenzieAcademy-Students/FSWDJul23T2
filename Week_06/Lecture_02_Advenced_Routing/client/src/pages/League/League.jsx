import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

function League() {
  const navigate = useNavigate();
  /**
   * We can call useParams() to get the actual route parameters
   * based on the routes we created
   */
  const { league } = useParams();

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to={`/${league}`}>
            {league.toUpperCase()}
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={`/${league}/scores`}>
              Scores
            </Nav.Link>
            <Nav.Link as={Link} to={`/${league}/standings`}>
              Standings
            </Nav.Link>
            <Nav.Link as={Link} to={`/${league}/teams`}>
              Teams
            </Nav.Link>
            <Nav.Link as={Button} onClick={() => navigate(`/${league}/other`)}>
              Other
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default League;
