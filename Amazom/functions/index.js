/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/*const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express")
const cors = require ("cors");
const { https } = require("firebase-functions");
const { ClientInfo } = require("firebase-functions/v1/testLab");
const stripe = require("stripe")("sk_test_51QeLNOPDBn2nIcH7GybpYaBdAt3jkWLZEZDSzqdu4JTNynUWUCDQmJHMo4xb36vIrFyBjFi4vV9QUoH68IHwb03j00D2wZmi6K");

const app = express()

app.use (cors({origin:true}))
app.use (express.json())


app.get("/",(request, response)=>response.status(200).send("hello world"))

app.post("/payments/create", async(request,response)=>{
    const total = request.query.total
    console.log("boommmmmm",total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"

     })
    
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,})
})


exports.api = https.onRequest(app)
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });*/
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51QeLNOPDBn2nIcH7GybpYaBdAt3jkWLZEZDSzqdu4JTNynUWUCDQmJHMo4xb36vIrFyBjFi4vV9QUoH68IHwb03j00D2wZmi6K"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("boommmmmm", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api =onRequest(app);

