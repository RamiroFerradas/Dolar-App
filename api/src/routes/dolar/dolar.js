const express = require("express");
const router = express.Router();
const {
  getAllValues,
  getDolarOficial,
  getDolarBlue,
  getContadoConLiqui,
  getDolarPromedio,
  getDolarBolsa,
  getDolarTurista,
} = require("../../controller/dolarController");

/**
 * @description Rutas dolar
 */

router.get("/", (req, res) => {
  const availableEndpoints = router.stack
    .slice(1)
    .filter((layer) => layer.route)
    .map((layer) => layer.route.path);

  const message = `Endpoints disponibles en la sección de dolar: ${availableEndpoints.join(
    ", "
  )}`;
  res.send(message);
});

router
  .get("/all", getAllValues)
  .get("/dolaroficial", getDolarOficial)
  .get("/dolarblue", getDolarBlue)
  .get("/contadoliqui", getContadoConLiqui)
  .get("/dolarpromedio", getDolarPromedio)
  .get("/dolarbolsa", getDolarBolsa)
  .get("/dolarturista", getDolarTurista);

module.exports = router;
