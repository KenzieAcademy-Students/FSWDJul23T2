import { Router } from "express";
import userRoutes from "./user.routes";
import petRoutes from "./pet.routes";

// Router URL: /api
const router = Router();

router.use("/users", userRoutes);
router.use("/pets", petRoutes);

export default router;
