const { Router } = require("express");

const router = Router();
const bancosRoute = require("./bancos/bancos.js");
const bcraRoute = require("./bcra/bcra.js");
const euroRoute = require("./euro/euro.js");
const casasRoute = require("./casas/casas.js");
const dolarRoute = require("./dolar/dolar.js");
const realRoute = require("./real/real.js");
const riesgoRoute = require("./riesgoPais/riesgo.js");
const evolucionRoute = require("./evolucion/evolucion.js");

/**
 * @swagger
 * /api/bancos:
 *   get:
 *     summary: Retorrna lista de endpoints parabancos.
 *     description: Optional extended description in CommonMark or HTML.
 *     responses:
 *       '200':
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */

router
  .use("/bancos", bancosRoute)

  .use("/bcra", bcraRoute)

  .use("/euro", euroRoute)

  .use("/casas", casasRoute)

  .use("/dolar", dolarRoute)

  .use("/real", realRoute)

  .use("/riesgopais", riesgoRoute)

  .use("/evolucion", evolucionRoute);

module.exports = router;
