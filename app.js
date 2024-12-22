import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose"; // Import the database connection
import exchangeRoutes from "./routes/exchangeRoutes.js"; // Import the routes
import metadataRoutes from "./routes/metadataRoutes.js"; // Import the routes
import candleRoutes from "./routes/candleRoutes.js"; // Import the routes

const app = express();
app.use(json());
app.use(cors());

const uri =
  // "mongodb+srv://heshamaref38:Hesam2020@cluster0.ci9ce.mongodb.net/Mydatabase?retryWrites=true&w=majority"; // Updated connection string
  // "mongodb://localhost:27017/mydatabase"; // Updated connection string
  "mongodb+srv://heshamaref:hesham2020@cluster0.g2vdp.mongodb.net/Mydatabase"; // Updated connection string

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected successfully"))
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
