import { Router } from "express";
import {
  addCrewToShip,
  createShip,
  deleteCrewmemberFromShip,
  getAllShips,
  getShipById,
} from "../controllers/ship.controller";

const router = Router();

router
  .route("/")
  // GET /api/ships
  .get(getAllShips)
  // POST /api/ships
  .post(createShip);

router
  .route("/:id")
  // GET /api/ships/:id
  .get(getShipById);

router
  .route("/:id/crew")
  // GET /api/ships/:id/crew
  .get()
  // PATCH /api/ships/:id/crew
  .patch(addCrewToShip)
  // DELETE /api/ships/:id/crew
  .delete(deleteCrewmemberFromShip);

export default router;
