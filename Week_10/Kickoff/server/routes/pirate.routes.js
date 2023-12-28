import { Router } from "express";
import {
  createPirate,
  deletePirate,
  getAllPirates,
  getSinglePirate,
  updatePirate,
} from "../controllers/pirate.controller";

const pirateRoutes = Router();

pirateRoutes
  .route("/")
  // GET /api/pirates
  .get(getAllPirates)
  // POST /api/pirates
  .post(createPirate);

pirateRoutes
  .route("/:id")
  // GET /api/pirates/:id
  .get(getSinglePirate)
  // PUT /api/pirates/:id
  .put(updatePirate)
  // DELETE /api/pirates/:id
  .delete(deletePirate);

export default pirateRoutes;
