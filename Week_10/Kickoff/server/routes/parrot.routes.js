import { Router } from "express";
import { deleteParrot } from "../controllers/parrot.controller";

const router = Router();

router
  .route("/:id")
  // DELETE /api/parrots/:id
  .delete(deleteParrot);

export default router;
