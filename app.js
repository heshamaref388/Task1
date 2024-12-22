// app.js
import express, { json } from "express";
import cors from "cors";
import { connect } from "mongoose";
import exchangeRoutes from "./routes/exchangeRoutes.js"; // Import the routes
import metadataRoutes from "./routes/metadataRoutes.js"; // Import the routes
import candleRoutes from "./routes/candleRoutes.js"; // Import the routes

const app = express();
app.use(json());
app.use(cors());

// Connect to MongoDB
connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use the exchange routes
app.use("/exchanges", exchangeRoutes);
app.use("/metadata", metadataRoutes);
app.use("/candle", candleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
