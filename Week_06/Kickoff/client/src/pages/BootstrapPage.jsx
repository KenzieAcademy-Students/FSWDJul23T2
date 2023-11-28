import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BootstrapPage = () => {
  return (
    <Container>
      <h1>Bootstrap and React Bootstrap</h1>
      <Row className="d-flex align-items-center">
        <Col xs={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>What is Bootstrap?</Card.Title>
              <Card.Text>
                Bootstrap is a CSS library created by the developers at X
                (formerly known as Twitter). It provides a comprehensive set of
                classes that allow us to style our HTML by combining a series of
                pre-defined classes revolving around a single styling property
                to create clean and responsive webpages.
              </Card.Text>
              <Card.Text>
                For example, rather than creating a class that contains all of
                the styling for a singular element, we can use Bootstrap to
                create the HTML element, and apply several different classes,
                one for each styling rule.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a
                href="https://getbootstrap.com/docs/4.1/layout/overview/"
                target="_blank"
              >
                Bootstrap Documentation
              </a>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>What's Responsive Styling?</Card.Title>
              <Card.Text>
                Responsive styling is the term used to refer to any styling that
                allows a webpage's styling to react to various screen sizes and
                shape. In short, it is what allows web pages to look good on a
                desktop, laptop, tablet, and mobile device without having to
                create multiple different applications.
              </Card.Text>
              <Card.Text>
                To create responsive styling without the help of a third party
                library, you would be responsible for defining the different
                styling rules for various screen sizes (also known as
                breakpoints), which can be incredibly tedious.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
                target="_blank"
              >
                MDN Documentation
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Then what's React Bootstrap?</Card.Title>

              <Card.Text>
                Raw Bootstrap provides CSS files for the visual styling, and a
                pre-built set of jQuery scripts for interactive elements.
                However, jQuery is a separate JavaScript library that does not
                play nice with React.
              </Card.Text>
              <Card.Text>
                As such, developers have compiled a series of React components
                into a library that incorporates Bootstrap styling and
                functionality. In fact, this entire app has been styled purely
                with React Bootstrap, minus one or two elements in the{" "}
                <Link to="/css-modules">CSS Modules</Link> page.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a
                href="https://react-bootstrap.netlify.app/docs/components/accordion"
                target="_blank"
              >
                React Bootstrap Documentation
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BootstrapPage;
