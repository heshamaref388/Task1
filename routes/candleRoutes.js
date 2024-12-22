// routes/candleRoutes.js
import { Router } from "express";
const router = Router();
import * as candleController from "../controllers/candleController.js";

// Route to create a new candle
router.post("/", candleController.createCandle);

// Route to get all candles
router.get("/", candleController.getAllCandle);

// Route to get a single candle by ID
router.get("/:id", candleController.getCandleById);

// Route to update an candle by ID
router.put("/:id", candleController.updateCandle);

// Route to delete an candle by ID
router.delete("/:id", candleController.deleteCandle);

export default router;
