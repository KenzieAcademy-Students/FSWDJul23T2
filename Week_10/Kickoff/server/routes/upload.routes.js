import { Router } from "express";
import { uploadFile } from "../controllers/upload.controller";

const router = Router();

// POST /api/uploads
router.post("/", uploadFile);

export default router;
