import { Button, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import api from "../utils/api.config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AllTeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    api
      .get("/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteTeam = (abbrev) => {
    api
      .delete(`/teams/${abbrev}`)
      .then((res) => {
        const filteredTeams = teams.filter(
          (team) => team.abbreviation.toUpperCase() !== abbrev.toUpperCase()
        );
        setTeams(filteredTeams);
        toast.success("Successfully deleted " + abbrev);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Abbrev</th>
            <th>Location</th>
            <th>Team Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id}>
              <td>{team.abbreviation}</td>
              <td>{team.location}</td>
              <td>{team.teamName}</td>
              <td>
                <Button
                  as={Link}
                  to={`/teams/${team.abbreviation.toLowerCase()}`}
                  className="mx-2"
                  variant="outline-primary"
                >
                  Details
                </Button>
                <Button
                  variant="outline-danger"
                  className="mx-2"
                  onClick={() => deleteTeam(team.abbreviation)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AllTeamsPage;
