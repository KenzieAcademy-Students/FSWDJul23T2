// To create a router, we must import the Router function from express.
import { Router } from "express";
import holidaysRouter from "./holidays.routes";
import foodsRouter from "./foods.routes";

// Then, call the Router function and assign it to a variable
const apiRouter = Router();

// All Requests' URL's start with /api
apiRouter.use("/holidays", holidaysRouter);
apiRouter.use("/foods", foodsRouter);

// Export the created router
export default apiRouter;
