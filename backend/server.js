import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import process from "process";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
app.use(cors({
  origin: "https://your-frontend.vercel.app",
  credentials: true
}));


app.use(express.json());
app.set("trust proxy", 1);


// Limit each IP to 5 requests per 10 minutes
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5, // max 5 requests per window
  message: "Too many requests from this IP, please try again later.",
});

app.use("/api/contact",limiter);


app.use("/api/contact",contactRoute);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

