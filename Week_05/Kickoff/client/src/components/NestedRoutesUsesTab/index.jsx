import React from "react";
import { Container, Row } from "react-bootstrap";

const NestedRoutesUsesTab = () => {
  return (
    <Container>
      <h2>Use Cases</h2>
      <Row as="p">
        Nested routes are incredibly useful in situations where you want to have
        the various steps taken on a single page accessible via URL. For
        example, maybe you're creating a user dashboard. On the left side of the
        dashboard is the list of options, and the right side of the dashboard
        changes based on the selected option. However, if you wish to bookmark
        the "change password" feature, for example, you need to have multiple
        routes for the same overall page, with a portion of the URL relating to
        a specific change on part of the page.
      </Row>
      <Row as="p">
        This page is an example of that. Notice that for each of the three tabs
        above, the URL changes, as do the contents below the tabs.
      </Row>
    </Container>
  );
};

export default NestedRoutesUsesTab;
