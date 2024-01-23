const express = require("express");
const router = express.Router();
const {
  getEuroNacion,
  getEuroGalicia,
  getEuroBBVA,
  getEuroPampa,
  getEuroChaco,
  getEuroHipotecario,
} = require("../../controller/euroController");

router
  .get("/", (req, res) => {
    const availableEndpoints = router.stack
      .slice(1)
      .filter((layer) => layer.route)
      .map((layer) => layer.route.path);

    const message = `Endpoints disponibles en la sección de euro: ${availableEndpoints.join(
      ", "
    )}`;
    res.send(message);
  })
  .get("/nacion", getEuroNacion)
  .get("/galicia", getEuroGalicia)
  .get("/bbva", getEuroBBVA)
  .get("/pampa", getEuroPampa)
  .get("/chaco", getEuroChaco)
  .get("/hipotecario", getEuroHipotecario);

module.exports = router;
