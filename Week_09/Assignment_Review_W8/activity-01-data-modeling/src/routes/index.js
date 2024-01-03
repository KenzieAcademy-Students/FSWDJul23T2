import { Router } from "express";
import heroRouter from "./hero.routes";

const router = Router();

router.use("/heroes", heroRouter);

export default router;
