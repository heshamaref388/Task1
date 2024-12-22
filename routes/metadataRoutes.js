// routes/MetadataRoutes.js
import { Router } from "express";
const router = Router();
import * as metadataController from "../controllers/metadataController.js";

// Route to create a new candle
router.post("/", metadataController.createMetadata);

// Route to get all Metadatas
router.get("/", metadataController.getAllMetadata);

// Route to get a single Metadata by ID
router.get("/:id", metadataController.getMetadataById);

// Route to update an Metadata by ID
router.put("/:id", metadataController.updateMetadata);

// Route to delete an Metadata by ID
router.delete("/:id", metadataController.deleteMetadata);

export default router;
