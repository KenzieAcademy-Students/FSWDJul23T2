import { Router } from "express";
import playersRoutes from "./players.routes";
import filesRoutes from "./files.routes";

const router = Router();

router.use("/players", playersRoutes);
router.use("/files", filesRoutes);

export default router;
