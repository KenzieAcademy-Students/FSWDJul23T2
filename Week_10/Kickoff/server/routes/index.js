import { Router } from "express";
import parrotRoutes from "./parrot.routes";
import pirateRoutes from "./pirate.routes";
import shipRoutes from "./ship.routes";
import uploadRoutes from "./upload.routes";

const router = Router();

router.use("/parrots", parrotRoutes);
router.use("/pirates", pirateRoutes);
router.use("/ships", shipRoutes);
router.use("/uploads", uploadRoutes);

export default router;
