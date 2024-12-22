import { Schema, model } from "mongoose";

const candleSchema = new Schema(
  {
    symbol: { type: String, required: true },
    dateTime: { type: Date, required: true },
    startPrice: { type: Number, required: true },
    highestPrice: { type: Number, required: true },
    lowestPrice: { type: Number, required: true },
    endPrice: { type: Number, required: true },
    volume: { type: Number, required: true },
    source: { type: String, required: true },
    candleType: { type: String, required: true },
    currency: { type: String, required: true },
  },
  { timestamps: true }
);

const Candle = model("Candle", candleSchema);

export default Candle;
