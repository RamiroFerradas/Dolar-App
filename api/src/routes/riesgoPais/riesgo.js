const express = require("express");
const router = express.Router();
const { getRiesgoPais } = require("../../controller/riesgoController");

/**
 * @description Ruta riesgo pais
 */

router.get("/", getRiesgoPais);

module.exports = router;
