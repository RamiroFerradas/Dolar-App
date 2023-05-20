const express = require("express");
const router = express.Router();
const {
  getDolarBBVA,
  getDolarPiano,
  getDolarHipotecario,
  getDolarGalicia,
  getDolarSantander,
  getDolarCiudad,
  getDolarSupervielle,
  getDolarPatagonia,
  getDolarComafi,
  getDolarNacion,
  getDolarBIND,
  getDolarChaco,
  getDolarPampa,
  getDolarBancor,
  getDolarMayorista,
} = require("../../controller/bancosController");

/**
 * @description Rutas bancos
 */

router.get("/", (req, res) => {
  const availableEndpoints = router.stack
    .slice(1)
    .filter((layer) => layer.route)
    .map((layer) => layer.route.path);

  const message = `Endpoints disponibles en la sección de bancos: ${availableEndpoints.join(
    ", "
  )}`;
  res.send(message);
});

router
  .get("/bbva", getDolarBBVA)
  .get("/piano", getDolarPiano)
  .get("/hipotecario", getDolarHipotecario)
  .get("/galicia", getDolarGalicia)
  .get("/santander", getDolarSantander)
  .get("/ciudad", getDolarCiudad)
  .get("/supervielle", getDolarSupervielle)
  .get("/patagonia", getDolarPatagonia)
  .get("/comafi", getDolarComafi)
  .get("/nacion", getDolarNacion)
  .get("/bind", getDolarBIND)
  .get("/chaco", getDolarChaco)
  .get("/pampa", getDolarPampa)
  .get("/bancor", getDolarBancor)
  .get("/mayorista", getDolarMayorista);

module.exports = router;
