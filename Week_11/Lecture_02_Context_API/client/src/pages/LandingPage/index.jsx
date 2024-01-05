import { Card, Col, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAdvanced from "../../hooks/useAdvanced";

function LandingPage() {
  const { user } = useAdvanced();

  if (user) return <Navigate to="/dashboard" />;

  return (
    <Container as="main">
      <h1>Welcome to Just a Little Context</h1>
      <Row>
        <Col>
          <Card>
            <Card.Img src="/what_is_context.jpg" />
            <Card.Header>What is Context?</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                architecto similique reprehenderit debitis itaque corporis minus
                molestias consectetur alias saepe. Iure, nobis laboriosam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="/guide_to_context.webp" />
            <Card.Header>Why Does It Matter?</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti laudantium qui non?
              </Card.Text>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt saepe libero, mollitia nihil molestias autem rem harum
                consectetur labore delectus, magni deleniti esse.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="/react_context.svg" />
            <Card.Header>How Do?</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                natus harum explicabo eaque dolores velit, cupiditate aperiam
                ullam possimus, sunt dolore officia autem nesciunt temporibus
                molestiae vitae.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
