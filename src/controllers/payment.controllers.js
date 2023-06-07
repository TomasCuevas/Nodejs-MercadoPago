import mercadopago from "mercadopago";

//* CONFIG *//
import { HOST, MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY,
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Notebook HP 15-ef2529la",
        unit_price: 125000,
        currency_id: "ARS",
        quantity: 1,
      },
    ],
    back_urls: {
      success: `${HOST}/success`,
      failure: `${HOST}/failure`,
      pending: `${HOST}/pending`,
    },
    notification_url: "https://63e5-201-252-65-196.sa.ngrok.io/webhook",
  });

  res.send(result.body);
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      // GUARDAR DATA EN NUESTRA BASE DE DATOS
      // GUARDAR DATA EN NUESTRA BASE DE DATOS
      // GUARDAR DATA EN NUESTRA BASE DE DATOS
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500).json({ error: error.message });
  }
};
