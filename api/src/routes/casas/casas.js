const express = require("express");
const router = express.Router();
const {
  getDolarMetro,
  getDolarAlpe,
  getDolarVaccaro,
  getDolarJonestur,
  getDolarMoneta,
  getDolarExchange,
  getDolarDaminato,
  getDolarMontemar,
  getDolarLosTilos,
  getDolarMaguitur,
  getDolarTransatlantica,
} = require("../../controller/casasController");

/**
 * @description Rutas casas de cambio
 */

router.get("/", (req, res) => {
  const availableEndpoints = router.stack
    .slice(1)
    .filter((layer) => layer.route)
    .map((layer) => layer.route.path);

  const message = `Endpoints disponibles en la sección de casas de cambio: ${availableEndpoints.join(
    ", "
  )}`;
  res.send(message);
});

router
  .get("/caba/metropolis", getDolarMetro)
  .get("/caba/alpe", getDolarAlpe)
  .get("/caba/vaccaro", getDolarVaccaro)
  .get("/caba/transatlantica", getDolarTransatlantica)
  .get("/lp/tilos", getDolarLosTilos)
  .get("/mdp/jonestur", getDolarJonestur)
  .get("/mdp/moneta", getDolarMoneta)
  .get("/mdp/exchange", getDolarExchange)
  .get("/rosario/daminato", getDolarDaminato)
  .get("/mendoza/montemar", getDolarMontemar)
  .get("/tucuman/maguitur", getDolarMaguitur);

module.exports = router;
