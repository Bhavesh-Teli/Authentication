import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import { connectionDb } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:5173",credentials:true}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

connectionDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start the server due to DB connection error:",
      error
    );
    process.exit(1);
  });
