import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import authRoutes from "./Routes/authRoutes.js";
import dataRoutes from "./Routes/dataRoutes.js";

const corsOptions = {
  origin: "http://88.222.245.31/4182",
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();
app.use(cors(corsOptions));
app.use(express.json());

// Use the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
