import { Button, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import api from "../utils/api.config";

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
      .then((res) => console.log(res.data))
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
                  variant="outline-danger"
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
