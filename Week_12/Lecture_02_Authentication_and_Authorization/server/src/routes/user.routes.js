import { Router } from "express";
import userController from "../controllers/user.controller";
import { requireAuth } from "../middleware";

const userRoutes = Router();

userRoutes
  .route("/:username")
  .get(requireAuth, userController.getUserData)
  .put(requireAuth, userController.updateUser);

export default userRoutes;
