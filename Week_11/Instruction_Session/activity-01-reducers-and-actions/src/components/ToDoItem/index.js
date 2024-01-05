import React, { useState, useEffect } from "react";
import { Card, Button, ButtonGroup, Form, Row, Col } from "react-bootstrap";

import "./ToDoItem.scss";

export default function ToDoItem(props) {
  const [task, setTask] = useState(props.toDoItem.task);

  useEffect(() => {
    setTask(props.toDoItem.task);
  }, [props.toDoItem]);

  return (
    <>
      <Card>
        <Row className="justify-content-md-center" md={6}>
          {!props.toDoItem.inEdit ? (
            <Col className="ToDoColumn">{props.index + 1}</Col>
          ) : (
            <Col>
              <ButtonGroup vertical size="sm">
                <Button
                  variant="light"
                  onClick={() =>
                    props.handlers.reOrderTask(props.index, "increase")
                  }
                >
                  Increase Priority
                </Button>
                <Button
                  variant="dark"
                  onClick={() =>
                    props.handlers.reOrderTask(props.index, "decrease")
                  }
                >
                  Decrease Priority
                </Button>
              </ButtonGroup>
            </Col>
          )}

          <Col md={4} className="ToDoColumn">
            {!props.toDoItem.inEdit ? (
              task
            ) : (
              <Form.Row className="align-items-center">
                <Form.Control
                  size="sm"
                  type="task"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                />
              </Form.Row>
            )}
          </Col>
          <Col className="ToDoColumn">
            {!props.toDoItem.inEdit ? (
              <>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => props.handlers.completeTask(props.index)}
                >
                  Complete
                </Button>
                <Button
                  size="sm"
                  variant="outline-success"
                  onClick={() => props.handlers.editTask(props.index)}
                >
                  Edit
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => props.handlers.saveTask(props.index, task)}
                >
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => props.handlers.deleteTask(props.index)}
                >
                  Delete
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
}
