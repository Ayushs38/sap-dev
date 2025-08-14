import { Router } from "express";
import { getUserDetails, login, logout } from "../controllers/auth.controller.js";
// import auth
const router = Router();



// add routes
router.post("/login", login);
router.get("/me",getUserDetails);
router.post("/logout", logout);

export default router 
