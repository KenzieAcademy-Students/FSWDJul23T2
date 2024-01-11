import { Router } from "express";
import authRoutes from "./auth.routes";
import themeRoutes from "./theme.routes";
import requireAuth from "../middleware/requireAuth";

const router = Router();

router.use("/auth", authRoutes);
router.use("/theme", requireAuth, themeRoutes);

export default router;
