import express from "express";
import { signup } from "../controllers/signup.js";
const router = express.Router();

//requested by customer
router.get("/signup", signup)

export default router;