import React from "react";
import { Button, Card } from "react-bootstrap";
import "./RecentShipCard.css";
import { Link } from "react-router-dom";

const RecentShip = ({ ship }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="recent-ship-thumbnail"
        src={ship.imageUrl}
        alt={ship.name}
      />
      <Card.Body>
        <Card.Title>{ship.name}</Card.Title>
        <Button
          type="link"
          as={Link}
          to={`/ships/${ship._id}`}
          size="sm"
          variant="primary"
        >
          Info
        </Button>
        <Button type="button" size="sm" variant="secondary">
          Favorite
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecentShip;
