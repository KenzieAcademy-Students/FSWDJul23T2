import { Router } from "express";
import teamsRoutes from "./teams.routes";

const router = Router();
/**
 * This router handles requests with a URL starting with:
 * /api
 */

router.use("/teams", teamsRoutes);

export default router;
