import { Router } from "express";
import {
  createCuisineStyle,
  findAllCuisineStyles,
} from "../controllers/cuisineStyle.controller";

const cuisineRoutes = Router();

cuisineRoutes
  .route("/")
  // GET /api/cuisines - get a list of cuisine styles
  .get(findAllCuisineStyles)
  // POST /api/cuisines - create a new cuisine style
  .post(createCuisineStyle);

export default cuisineRoutes;
