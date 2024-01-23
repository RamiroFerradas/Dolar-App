const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/*.js"];

const doc = {
  host: "http://localhost:3001/",
  basePath: "/api",
};

const generateSwaggerSpec = async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
};

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger_output.json");

const swaggerDocs = (app) => {
  generateSwaggerSpec();
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocument);
  });
};

console.log(`📕 Documentacion disponible en http://localhost:3001/api/docs/`);

module.exports = { swaggerDocs };
