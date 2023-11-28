import React from "react";
import { Container, Row, Tab } from "react-bootstrap";

const NestedRoutesIntroTab = () => {
  return (
    <Container>
      <h2>Nested Routes</h2>
      <Row as="p">
        Notice the URL on this page upon navigating is /nested-routes. You can
        navigate to various sub-routes via the tabs below to see an example of
        nested routing.
      </Row>
    </Container>
  );
};

export default NestedRoutesIntroTab;
