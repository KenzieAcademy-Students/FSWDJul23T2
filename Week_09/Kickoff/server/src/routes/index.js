import { Router } from "express";
import playerRouter from "./player.routes";

/**
 * By default, all requests with a URL
 * starting with "/api" go to this router
 */
const apiRouter = Router();

apiRouter.use("/players", playerRouter);

export default apiRouter;
