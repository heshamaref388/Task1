// controllers/candleController.js
import Candle from "../dataBase/models/candle.js";

// Create a new candle
export async function createCandle(req, res) {
  try {
    const candle = new Candle(req.body);
    await candle.save();
    res.status(201).send(candle);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Get all candle
export async function getAllCandle(req, res) {
  try {
    const candle = await Candle.find();
    res.status(200).send(candle);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Get a single candle  by ID
export async function getCandleById(req, res) {
  try {
    const candle = await Candle.findById(req.params.id);
    if (!candle) {
      return res.status(404).send({ message: "Candle not found" });
    }
    res.status(200).send(candle);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Update an candle  by ID
export async function updateCandle(req, res) {
  try {
    const candle = await Candle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!candle) {
      return res.status(404).send({ message: "candle not found" });
    }
    res.status(200).send(candle);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Delete an candle  by ID
export async function deleteCandle(req, res) {
  try {
    const candle = await Candle.findByIdAndDelete(req.params.id);
    if (!candle) {
      return res.status(404).send({ message: "candle not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
}
