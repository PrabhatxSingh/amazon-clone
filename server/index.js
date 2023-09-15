const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_KEY
);

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => response.status(200).send("Working"));



app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
    
  console.log("infunction1");
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    dbId: paymentIntent.id,
    dbAmount: paymentIntent.amount,
    dateCreated: paymentIntent.created,
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started!!");
});