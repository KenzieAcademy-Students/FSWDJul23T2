import { Router } from "express";
import { handleUploadFile } from "../controllers/files.controller";

const filesRoutes = Router();

filesRoutes.route("/").post(handleUploadFile);

export default filesRoutes;
