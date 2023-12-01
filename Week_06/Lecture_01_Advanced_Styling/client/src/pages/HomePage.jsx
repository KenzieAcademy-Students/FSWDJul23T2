import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={4} lg={3} as="section">
          <h3>This is my homepage</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus corrupti eius, similique amet maiores voluptate
            temporibus, consectetur soluta labore sed dolores eaque repudiandae!
          </p>
        </Col>
        <Col xs={12} sm={4} lg={3} as="section">
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sunt delectus assumenda!
          </p>
        </Col>
        <Col xs={12} sm={4} lg={6} as="section">
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
            officiis!
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            nostrum optio molestias quod tempore doloribus ex ipsum eveniet?
            Recusandae ad molestias, adipisci dignissimos minima sit sequi enim!
            Delectus, explicabo beatae.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
