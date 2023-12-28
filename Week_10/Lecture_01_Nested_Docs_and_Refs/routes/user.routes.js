import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes
  .route("/")
  // POST /api/users - create dummy users (no auth)
  .post(createUser);

export default userRoutes;
