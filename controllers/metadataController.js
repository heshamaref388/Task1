// controllers/metadataController.js
import Metadata from "../dataBase/models/metadata.js";

// Create a new metadata
export async function createMetadata(req, res) {
  try {
    const metadata = new Metadata(req.body);
    await metadata.save();
    res.status(201).send(metadata);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Get all metadata
export async function getAllMetadata(req, res) {
  try {
    const metadata = await Metadata.find();
    res.status(200).send(metadata);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Get a single metadata  by ID
export async function getMetadataById(req, res) {
  try {
    const metadata = await Metadata.findById(req.params.id);
    if (!metadata) {
      return res.status(404).send({ message: "metadata not found" });
    }
    res.status(200).send(metadata);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Update an metadata  by ID
export async function updateMetadata(req, res) {
  try {
    const metadata = await Metadata.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!metadata) {
      return res.status(404).send({ message: "metadata not found" });
    }
    res.status(200).send(metadata);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Delete an metadata  by ID
export async function deleteMetadata(req, res) {
  try {
    const metadata = await Metadata.findByIdAndDelete(req.params.id);
    if (!metadata) {
      return res.status(404).send({ message: "metadata not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
}
