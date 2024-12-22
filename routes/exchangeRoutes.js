// routes/exchangeRoutes.js
import { Router } from "express";
const router = Router();
import * as exchangeController from "../controllers/exchangeController.js";

// Route to create a new exchange
router.post("/", exchangeController.createExchange);

// Route to get all exchanges
router.get("/", exchangeController.getAllExchanges);

// Route to get a single exchange by ID
router.get("/:id", exchangeController.getExchangeById);

// Route to update an exchange by ID
router.put("/:id", exchangeController.updateExchange);

// Route to delete an exchange by ID
router.delete("/:id", exchangeController.deleteExchange);

export default router;
