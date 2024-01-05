import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import "./CompletedItem.scss";

export default function CompletedItem(props) {
  return (
    <>
      <Card>
        <Row className="justify-content-md-center" md={6}>
          <Col></Col>
          <Col md={4} className="ToDoColumn">
            <strike>{props.task}</strike>
          </Col>
          <Col className="ToDoColumn">
            <Button
              size="sm"
              variant="danger"
              onClick={() => props.deCompleteTask(props.index)}
            >
              Mark UnComplete
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}
