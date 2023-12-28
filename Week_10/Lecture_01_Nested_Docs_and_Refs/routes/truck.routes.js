import { Router } from "express";
import {
  addFoodTruckLike,
  addReviewToTruck,
  createFoodTruck,
  deleteFoodTruckLike,
  findAllFoodTrucks,
} from "../controllers/truck.controller";

const truckRoutes = Router();

truckRoutes
  .route("/")
  // GET /api/trucks - get a list of all food trucks
  .get(findAllFoodTrucks)
  // POST /api/trucks - create a new food truck
  .post(createFoodTruck);

truckRoutes
  .route("/:id/favorite")
  // PATCH /api/trucks/:id/favorite - have a user favorite a truck
  .patch(addFoodTruckLike)
  // DELETE /api/trucks/:id/favorite - remove a truck/user favorite
  .delete(deleteFoodTruckLike);

truckRoutes
  .route("/:id/review")
  // POST /api/trucks/:id/review - add a review to a food truck
  .post(addReviewToTruck);

export default truckRoutes;
