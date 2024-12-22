// seed.js
import mongoose from "mongoose";
import Exchange from "./dataBase/models/exchange.js";
import exchangeData from "./exchange.json" assert { type: "json" }; // Assuming exchange.json is in the same directory

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log("MongoDB connected");

    // Clear existing data
    await Exchange.deleteMany({});

    // Prepare data for insertion
    const exchanges = exchangeData.hits.hits
      .map((item) => ({
        symbol: item._source.symbol,
        ticker: item._source.ticker,
        code: item._source.code,
        isin: item._source.isin,
        type: item._source.type,
        name: item._source.name,
        country: item._source.country,
        currency: item._source.currency,
        operatingMIC: item._source.operatingMIC || null, // Use null if empty
        codeExchange: item._source.codeExchange,
        nameExchange: item._source.nameExchange,
      }))
      .filter((item) => item.operatingMIC); // Filter out items with empty operatingMIC

    // Insert data into the database
    await Exchange.insertMany(exchanges);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

seedDatabase();
