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
const keepaliveRoute = require("./keep-alive.js");

router.use(
  "/bancos",
  bancosRoute
  // #swagger.tags = ['Bancos']
  // #swagger.description = 'Endpoints relacionados con bancos'
);

router.use(
  "/bcra",
  bcraRoute
  // #swagger.tags = ['BCRA']
  // #swagger.description = 'Endpoints relacionados con BCRA'
);

router.use(
  "/euro",
  euroRoute
  // #swagger.tags = ['Euro']
  // #swagger.description = 'Endpoints relacionados con Euro'
);
router.use(
  "/casas",
  casasRoute
  // #swagger.tags = ['Casas de cambio']
  // #swagger.description = 'Endpoints relacionados con Casas de cambio'
);
router.use(
  "/dolar",
  dolarRoute
  // #swagger.tags = ['Dolar']
  // #swagger.description = 'Endpoints relacionados con Dolar'
);
router.use(
  "/real",
  realRoute
  // #swagger.tags = ['Real']
  // #swagger.description = 'Endpoints relacionados con Real'
);
router.use(
  "/riesgopais",
  riesgoRoute
  // #swagger.tags = ['Riesgo pais']
  // #swagger.description = 'Endpoints relacionados con el riesgo pais'
);
router.use(
  "/evolucion",
  evolucionRoute
  // #swagger.tags = ['Evolucion']
  // #swagger.description = 'Endpoints relacionados con evolucion del dolar'
);
router.use("/keep-alive", keepaliveRoute);

module.exports = router;
