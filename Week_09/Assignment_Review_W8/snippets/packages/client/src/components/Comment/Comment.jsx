import React from "react";
import { Figure, Row, Col } from "react-bootstrap";
import "./Comment.scss";

const Comment = ({ comment }) => {
  const { author } = comment;
  return (
    <Row className="comment-card my-3 px-3 py-2" style={{ flexWrap: "nowrap" }}>
      <Col
        as={Figure}
        xs={3}
        className="mr-4 bg-border-color rounded-circle ml-2 p-1"
        style={{
          height: "65px",
          minHeight: "65px",
          width: "65px",
          minWidth: "65px",
          marginTop: "0px",
        }}
      >
        <Figure.Image
          src={author.profile_image}
          className="avatar w-100 h-100 mr-4"
        />
      </Col>
      <Col xs={9} className="d-flex flex-column">
        <div className="mb-2 comment-author">
          <span>@{comment.author?.username}</span>
        </div>
        <p className="comment-text">{comment.text}</p>
      </Col>
    </Row>
  );
};

export default Comment;
