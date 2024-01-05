import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import "./AddItem.scss";

export default function AddItem(props) {
  return (
    <>
      <Card>
        <Row className="justify-content-md-center" md={6}>
          <Col className="ToDoColumn">
            <Button size="sm" variant="outline-success" onClick={props.addTask}>
              Add Item
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}
