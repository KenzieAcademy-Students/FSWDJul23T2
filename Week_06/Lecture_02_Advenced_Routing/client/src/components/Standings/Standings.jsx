import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Standings() {
  const { league } = useParams();
  return <Container>{league.toUpperCase()} standings</Container>;
}

export default Standings;
