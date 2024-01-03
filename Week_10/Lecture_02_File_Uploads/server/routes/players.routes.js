import { Router } from "express";
import {
  validateCreatePlayer,
  validateGetPlayerById,
  validateUpdatePlayer,
} from "../middleware/players.validations";
import {
  handleCreatePlayer,
  handleGetAllPlayers,
  handleGetPlayerById,
  handleUpdatePlayer,
  handleDeletePlayer,
} from "../controllers/players.controller";

const playersRoutes = Router();

playersRoutes
  .route("/")
  .get(handleGetAllPlayers)
  .post(validateCreatePlayer, handleCreatePlayer);

playersRoutes
  .route("/:playerId")
  .get(validateGetPlayerById, handleGetPlayerById)
  .put(validateUpdatePlayer, handleUpdatePlayer)
  .delete(validateGetPlayerById, handleDeletePlayer);

export default playersRoutes;
