import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Scores() {
  const { league } = useParams();
  return <Container>{league.toUpperCase()} scores</Container>;
}

export default Scores;
