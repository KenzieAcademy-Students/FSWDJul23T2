import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function OtherSports() {
  const { league } = useParams();

  return <Container>Other with {league.toUpperCase()}</Container>;
}

export default OtherSports;
