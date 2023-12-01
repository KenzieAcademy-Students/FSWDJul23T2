import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Teams() {
  const { league } = useParams();

  return <Container>{league.toUpperCase()} teams</Container>;
}

export default Teams;
