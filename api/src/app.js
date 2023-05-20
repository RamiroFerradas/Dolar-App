const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const bodyParser = require("body-parser");
const router = require("./routes/router");
const cors = require("cors"); // Importa el paquete cors
const PORT = process.env.PORT || 7070;
const app = express();
const morgan = require("morgan");

app.use(cors()); // Usa el middleware cors
app.options("*", cors()); // Habilita los verbos OPTIONS para todos los recursos

app.get("/api", async (req, res) => {
  try {
    res.send(
      "API para obtener las cotizaciones de los distintos tipos de dolar y riesgo pais. La documentacion la podes encontrar en `http://localhost:3001/api/docs`"
    );
  } catch (e) {
    console.log(e.message);
    res.send(500);
  }
});

// Settings
app.set("port", PORT);
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", router);

// CORS
app.use("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

module.exports = app;
