import React, { useEffect, useState } from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { LoadingIcon, RecentShipCard } from "../components";
import { Link } from "react-router-dom";
import api from "../utils/api.utils";

const AllShipsPage = () => {
  const [ships, setShips] = useState();
  /**
   * To access data saved in local storage, call the
   * localStorage.getItem() method.
   * - param 1: the key used to save it into local storage
   *   in the first place
   * NOTE: As only strings can be saved into local storage,
   * you'll need to use JSON.parse() to convert it back to an object
   */
  let recentShip = localStorage.getItem("lastViewedShip");
  if (recentShip) recentShip = JSON.parse(recentShip);

  useEffect(() => {
    api
      .get("/ships")
      .then((response) => {
        setShips(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {!ships && <LoadingIcon fullscreen />}
      <h3>All Ships</h3>
      <Table>
        <thead>
          <tr>
            <th>Ship Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ships &&
            ships.map((ship) => (
              <tr key={ship._id}>
                <td>{ship.name}</td>
                <td>
                  <Button
                    as={Link}
                    to={`/ships/${ship._id}`}
                    type="link"
                    variant="info"
                    size="sm"
                  >
                    Details
                  </Button>
                  <Button type="button" variant="secondary" size="sm">
                    Favorite
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {recentShip && (
        <Row>
          <Col as="h3" xs={12}>
            Recently Viewed
          </Col>
          <RecentShipCard ship={recentShip} />
        </Row>
      )}
    </Container>
  );
};

export default AllShipsPage;
