import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function LeagueHome() {
  const { league } = useParams();
  return (
    <Container>
      <h1>{league.toUpperCase()}</h1>
      <p>
        This is the {league.toUpperCase()} page. The component called
        LeagueHome.
      </p>
      <p>
        In fact, the other nested pages under this URL are also generic.{" "}
        <code>Scores</code>, <code>Standings</code>, and <code>Teams</code> can
        be applied to way more than just the {league.toUpperCase()}. And they
        are!
      </p>
    </Container>
  );
}

export default LeagueHome;
