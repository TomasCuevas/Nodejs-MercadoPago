import { Router } from "express";

//* CONTROLLERS *//
import {
  createOrder,
  receiveWebhook,
} from "../controllers/payment.controllers.js";

const router = Router();

router.post("/create/order", createOrder);

router.get("/success", (req, res) => res.send("Orden creada."));

router.get("/failure", (req, res) => res.send("Error al crear la orden."));

router.get("/pending", (req, res) => res.send("Pendiente."));

router.post("/webhook", receiveWebhook);

export default router;
