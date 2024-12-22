// controllers/exchangeController.js
import Exchange from "../dataBase/models/exchange.js";

// Create a new exchange
export async function createExchange(req, res) {
  try {
    const exchange = new Exchange(req.body);
    await exchange.save();
    res.status(201).send(exchange);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Get all exchanges
export async function getAllExchanges(req, res) {
  try {
    const exchanges = await Exchange.find();
    res.status(200).send(exchanges);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Get a single exchange by ID
export async function getExchangeById(req, res) {
  try {
    const exchange = await Exchange.findById(req.params.id);
    if (!exchange) {
      return res.status(404).send({ message: "Exchange not found" });
    }
    res.status(200).send(exchange);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Update an exchange by ID
export async function updateExchange(req, res) {
  try {
    const exchange = await Exchange.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!exchange) {
      return res.status(404).send({ message: "Exchange not found" });
    }
    res.status(200).send(exchange);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Delete an exchange by ID
export async function deleteExchange(req, res) {
  try {
    const exchange = await Exchange.findByIdAndDelete(req.params.id);
    if (!exchange) {
      return res.status(404).send({ message: "Exchange not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
}
