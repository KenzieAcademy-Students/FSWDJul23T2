import { Router } from "express";
import {
  findAllShips,
  findRecentlyViewedShipsByIds,
  findShipById,
} from "../controllers/ship.controller";

const router = Router();

router
  .route("/")
  // GET /api/ships?id=id1,id2,id3...
  .get(findRecentlyViewedShipsByIds)
  // GET /api/ships
  .get(findAllShips);

router
  .route("/:id")
  // GET /api/ships/:id
  .get(findShipById);

export default router;
