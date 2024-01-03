import { Router } from "express";
import cuisineRoutes from "./cuisineStyle.routes";
import userRoutes from "./user.routes";
import truckRoutes from "./truck.routes";

const apiRoutes = Router();

apiRoutes.use("/cuisines", cuisineRoutes);
apiRoutes.use("/trucks", truckRoutes);
apiRoutes.use("/users", userRoutes);

export default apiRoutes;
