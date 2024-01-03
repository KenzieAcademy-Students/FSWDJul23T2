import { Router } from "express";
import {
  createPlayerHandler,
  deletePlayerByIdHandler,
  findAllPlayersHandler,
  findPlayerByIdHandler,
  findPlayersByPositionHandler,
  findPlayersOverThirtyHandler,
  updatePlayerByIdHandler,
} from "../controllers/player.controller";

/**
 * By default, all requests with a URL
 * starting with "/api/players" go to this router
 */
const playerRouter = Router();

/**
 * URL: /api/players
 */
playerRouter
  .route("/")
  // POST /api/players
  .post(createPlayerHandler)
  // GET /api/players
  .get(findAllPlayersHandler);

playerRouter.get("/old", findPlayersOverThirtyHandler);

/**
 * URL: /api/players/:playerId
 */
playerRouter
  .route("/:playerId")
  // GET /api/players/:playerId
  .get(findPlayerByIdHandler)
  // PUT /api/players/:playerId
  .put(updatePlayerByIdHandler)
  // DELETE /api/players/:playerId
  .delete(deletePlayerByIdHandler);

playerRouter
  .route("/position/:position")
  // GET /api/players/position/:position
  .get(findPlayersByPositionHandler);

export default playerRouter;

// db.InspirationalWomen.find({first_name: { $regex: /Harriet/i} })
