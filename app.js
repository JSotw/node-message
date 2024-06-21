const { createMessage } = require("./twilio/config.js");
const express = require("express");
const cors = require("cors");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.REACT_APP_API_URL);

app.use(
  cors({
    origin: dotenv.config().parsed.REACT_APP_API_URL,
    credentials: true,
  })
);

app.get("/send-message", (req, res) => {
  createMessage();
  res.send("Mensaje enviado");
});


module.exports = app;