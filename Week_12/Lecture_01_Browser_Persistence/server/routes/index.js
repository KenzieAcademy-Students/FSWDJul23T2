import { Router } from "express";
import shipRoutes from "./ship.routes";

const router = Router();

router.use("/ships", shipRoutes);

export default router;
