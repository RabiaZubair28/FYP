import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import authRoutes from "./Routes/authRoutes.js";
import dataRoutes from "./Routes/dataRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Use the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
