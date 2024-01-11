import { Router } from "express";
import {
  getPreferredTheme,
  savePreferredTheme,
} from "../controllers/theme.controller";

const router = Router();

router.route("/:userId").get(getPreferredTheme).post(savePreferredTheme);

export default router;
