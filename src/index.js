import express from "express";
import morgan from "morgan";

//* CONFIG *//
import { PORT } from "./config.js";

//* ROUTES *//
import PaymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(PaymentRoutes);

app.listen(PORT);
console.log(`Server on port ${PORT}`);
