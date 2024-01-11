import { Router } from "express";
import { validateSignin, validateSignup } from "../middleware/validations";
import { signIn, signUp } from "../controllers/auth.controller";

const router = Router();

router.route("/signup").post(validateSignup, signUp);
router.route("/signin").post(validateSignin, signIn);

export default router;
