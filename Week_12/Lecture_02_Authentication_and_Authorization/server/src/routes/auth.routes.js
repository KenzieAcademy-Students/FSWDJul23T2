import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", authController.signUp);
authRoutes.post("/signin", authController.signIn);

export default authRoutes;
