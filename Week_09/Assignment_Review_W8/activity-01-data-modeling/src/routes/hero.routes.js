import { Router } from "express";
import controller from "../controllers/hero.controller";

const router = Router();

router
  .route("/")
  .get(controller.getAllHeroesHandler)
  .post(controller.createHeroHandler);

router
  .route("/:id")
  .get(controller.getHeroByIdHandler)
  .put(controller.updateHeroByIdHandler)
  .delete(controller.deleteHeroHandler);

export default router;
