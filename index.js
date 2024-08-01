import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookiesParser from "cookie-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

// JSON data Model
app.use(express.json());
app.use(cookiesParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server Listening on PORT ${PORT}`);
});

// specific routes

// user routes

app.use("/api/users", userRoutes);
