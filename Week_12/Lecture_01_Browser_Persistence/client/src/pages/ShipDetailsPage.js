import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../utils/api.utils";
import { LoadingIcon } from "../components";

const ShipDetailsPage = () => {
  const [ship, setShip] = useState();
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/ships/${id}`)
      .then((response) => {
        const shipData = response.data;
        setShip(shipData);
        /**
         * To save data to local storage, call localStorage.setItem()
         *  - param 1: key name you'll use to later retrieve the data
         *  - param 2: the value you wish to save in local storage
         *    - this can only be a string/number; if you want to save an
         *      object in local storage, you'll need to use JSON.stringify()
         *      to convert it to an object
         */
        localStorage.setItem("lastViewedShip", JSON.stringify(shipData));
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      {!ship ? (
        <LoadingIcon fullscreen />
      ) : (
        <>
          <h1>{ship.name}</h1>
          <p>{ship.price} Cr</p>
          <img src={ship.imageUrl} alt={ship.name} />
        </>
      )}
    </Container>
  );
};

export default ShipDetailsPage;
