import express from "express";
import { login, logout, signup, checkAuth } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/authMiddleware.js"; // Import the middleware

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check", authenticate, checkAuth); // Use the middleware for checkAuth

export default router;
