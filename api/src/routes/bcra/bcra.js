const express = require("express");
const router = express.Router();
const {
  getReservas,
  getCirculante,
} = require("../../controller/bcraController");

/**
 * @description Rutas Reservas y Circulante
 */

router.get("/", (req, res) => {
  const availableEndpoints = router.stack
    .slice(1)
    .filter((layer) => layer.route)
    .map((layer) => layer.route.path);

  const message = `Endpoints disponibles en la sección de bcra: ${availableEndpoints.join(
    ", "
  )}`;
  res.send(message);
});

router.get("/reservas", getReservas).get("/circulante", getCirculante);

module.exports = router;
