import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";

const router = Router();

router.get("/", (req, res) => res.sendStatus(200));

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
