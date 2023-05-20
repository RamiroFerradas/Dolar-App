const express = require("express");
const router = express.Router();

const {
  getEvolucionDolarOficial,
  getEvolucionDolarBlue,
} = require("../../controller/dolarController");

const { getEvolucionReal } = require("../../controller/realController");
const { getEvolucionEuro } = require("../../controller/euroController");

/**
 * @description Rutas evolución mensual
 */

router.get("/", (req, res) => {
  const availableEndpoints = router.stack
    .slice(1)
    .filter((layer) => layer.route)
    .map((layer) => layer.route.path);

  const message = `Endpoints disponibles en la sección de evolucion: ${availableEndpoints.join(
    ", "
  )}`;
  res.send(message);
});

router
  .get("/dolaroficial", getEvolucionDolarOficial)
  .get("/dolarblue", getEvolucionDolarBlue)
  .get("/realoficial", getEvolucionReal)
  .get("/eurooficial", getEvolucionEuro);

module.exports = router;
