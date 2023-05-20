const express = require("express");
const router = express.Router();
const {
  getRealNacion,
  getRealBBVA,
  getRealChaco,
} = require("../../controller/realController");

/**
 * @description Rutas real
 */

router.get("/", (req, res) => {
  const availableEndpoints = router.stack
    .slice(1)
    .filter((layer) => layer.route)
    .map((layer) => layer.route.path);

  const message = `Endpoints disponibles en la sección real: ${availableEndpoints.join(
    ", "
  )}`;
  res.send(message);
});

router
  .get("/nacion", getRealNacion)
  .get("/bbva", getRealBBVA)
  .get("/chaco", getRealChaco);

module.exports = router;
