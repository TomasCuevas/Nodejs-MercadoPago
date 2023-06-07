import express from "express";
import morgan from "morgan";
import path from "path";
import { config } from "dotenv";
config();

//* CONFIG *//
import { PORT } from "./config.js";

//* ROUTES *//
import PaymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(PaymentRoutes);
app.use(express.static(path.resolve("src/public")));

app.listen(PORT);
console.log(`Server on port ${PORT}`);
