import mongoose from "mongoose";
import { float } from "webidl-conversions";

const { Schema } = mongoose;

const MetadataSchema = new Schema(
  {
    symbol: { type: String, required: false },
    source: { type: String, required: false },
    ticker: { type: String, required: false },
    code: { type: String, required: false },
    type: { type: String, required: false },
    name: { type: String, required: false },
    exchange: { type: String, required: false },
    currency: { type: String, required: false },
    countryName: { type: String, required: false },
    countryIso: { type: String, required: false },
    isin: { type: String, required: false },
    updatedAt: { type: Date, required: false },
    validUntil: { type: Date, required: false },
    Capitalization: {
      value: { type: Number, default: 0 },
      dominance: { type: Number, default: 0 },
      diluted: { type: Number, default: 0 },
      average: { type: Number, default: 0 },
      bucket: [
        {
          category: { type: String, default: "" },
          size: { type: String, default: "" },
          categoryAverage: { type: Number, default: 0 },
          benchmark: { type: Number, default: 0 },
          portfolioPercent: { type: Number, default: 0 },
          value: { type: Number, default: 0 },
        },
      ],
    },
    technicals: {
      beta: { type: Number, default: 0 },
      "52WeekHigh": { type: Number, default: 0 },
      "52WeekLow": { type: Number, default: 0 },
      "50DayMA": { type: Number, default: 0 },
      "200DayMA": { type: Number, default: 0 },
    },
    exchangeTradedFundDetails: {
      domicile: { type: String, default: "" },
      yield: { type: Number, default: 0 },
      companyName: { type: String, default: "" },
      totalAssets: { type: Number, default: 0 },
      performance: {
        "1YVolatility": { type: Number, default: 0 },
        returns1Y: { type: Number, default: 0 },
        returns3Y: { type: Number, default: 0 },
      },
      assetAllocation: [
        {
          name: { type: String, required: true },
          longPercent: { type: Number, default: 0 },
          shortPercent: { type: Number, default: 0 },
          netAssetsPercent: { type: Number, default: 0 },
        },
      ],
    },
    // Add other fields as necessary based on the JSON structure
  },
  { timestamps: true }
);

const Metadata = mongoose.model("Metadata", MetadataSchema);

export default Metadata;
