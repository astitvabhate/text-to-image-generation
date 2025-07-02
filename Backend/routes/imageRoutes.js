import express from "express";
import { generateImage } from "../controllers/image_controller.js";
import verifyToken from "../middlewares/auth.js";

const imageRouter = express.Router();

// Public route for image generation (no authentication required)
imageRouter.post('/generate', generateImage);

// Protected route for authenticated users (optional)
imageRouter.post('/generate-auth', verifyToken, generateImage);

export default imageRouter; 