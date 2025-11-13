import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import { connectionDb } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to be more flexible for Docker environments
const corsOptions = {
  origin: [
    process.env.CLIENT_URL,
    "http://localhost:3000",
    "http://frontend:3000", // For Docker container communication
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000"
  ],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.get("/",(req,res)=>{
  res.send("App is Running");
})

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