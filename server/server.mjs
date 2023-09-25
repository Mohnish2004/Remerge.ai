import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import cookieParser from "cookie-parser";
import authRoute from "./routes/AuthRoute.mjs";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

app.use("/", authRoute);
app.use("/record", records);
app.use(cookieParser());

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});