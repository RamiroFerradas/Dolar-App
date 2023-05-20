const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Dolar Si API",
      version: "1.0.0",
      description: "Documentación de la API",
    },
  },
  apis: ["src/routes/router.js"], // Ruta a tus archivos de definición de rutas de la API
};

const swaggerSpecs = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpecs);
  });
};

console.log(`📕 Documentacion disponible en "http://localhost:3001/api/docs"`);

module.exports = { swaggerDocs };
