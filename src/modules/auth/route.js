import { Router } from "express";
import getController from "./controller/get.js";
import signUpController from "./controller/signup.js";
import logInController from "./controller/login.js"
import { protect } from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/", protect, getController)
router.post("/signup", signUpController)
router.post("/login", logInController)

export default router