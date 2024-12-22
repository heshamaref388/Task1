// seed.js
import mongoose from "mongoose";
import Candle from "./dataBase/models/candle.js"; // Adjust the path as needed
import candleData from "./candle.json" assert { type: "json" }; // Assuming candle.json is in the same directory

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log("MongoDB connected");

    // Clear existing data
    await Candle.deleteMany({});

    // Prepare data for insertion
    const candles = candleData.hits.hits.map((item) => ({
      symbol: item._source.symbol,
      dateTime: item._source.dateTime,
      startPrice: item._source.startPrice,
      highestPrice: item._source.highestPrice,
      lowestPrice: item._source.lowestPrice,
      endPrice: item._source.endPrice,
      volume: item._source.volume,
      source: item._source.source,
      candleType: item._source.candleType,
      currency: item._source.currency,
    }));

    // Insert data into the database
    await Candle.insertMany(candles);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

seedDatabase();
