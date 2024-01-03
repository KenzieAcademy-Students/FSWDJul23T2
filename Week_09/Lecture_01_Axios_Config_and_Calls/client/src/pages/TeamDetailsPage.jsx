import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../utils/api.config";

function TeamDetailsPage() {
  const { abbrev } = useParams();
  useEffect(() => {
    api
      .get(`/teams/${abbrev}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [abbrev]);

  return <Container></Container>;
}

export default TeamDetailsPage;
