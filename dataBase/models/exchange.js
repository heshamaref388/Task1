// model.js
import { Schema, model } from "mongoose";

// Define the schema
const exchangeSchema = new Schema({
  symbol: { type: String, required: true },
  ticker: { type: String, required: true },
  code: { type: String, required: true },
  isin: { type: String, default: "" },
  type: { type: String, required: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  currency: { type: String, required: true },
  operatingMIC: { type: String, required: true },
  codeExchange: { type: String, required: true },
  nameExchange: { type: String, required: true },
});

// Create the model
const Exchange = model("Exchange", exchangeSchema);

export default Exchange;
