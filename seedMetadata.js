import mongoose from "mongoose";
import Metadata from "./dataBase/models/metadata.js"; // Adjust the path as necessary
import data from "./metadata.json" assert { type: "json" }; // Assuming Metadata.json is in the same directory

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/mydatabase"); // Change 'mydatabase' to your database name
    console.log("MongoDB connected");

    // Clear existing data
    await Metadata.deleteMany({});

    // Prepare data for insertion
    const marketEntries = data.hits.hits.map((item) => ({
      symbol: item._source.symbol,
      ticker: item._source.ticker,
      code: item._source.code,
      isin: item._source.isin,
      type: item._source.type,
      name: item._source.name,
      countryName: item._source.countryName,
      currency: item._source.currency,
      exchange: item._source.exchange,
      updatedAt: new Date(item._source.updatedAt),
      validUntil: new Date(item._source.validUntil),
      marketCapitalization: item._source.marketCapitalization,
      technicals: item._source.technicals,
      // Add other fields as necessary
    }));

    // Insert data into the database
    await Metadata.insertMany(marketEntries);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

seedDatabase();
