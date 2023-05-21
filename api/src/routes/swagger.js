const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/*.js"];
const HOST = process.env.HOST;

const doc = {
  host: HOST,
  basePath: "/api",
};

const generateSwaggerSpec = async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
  console.log("Swagger spec generado exitosamente");
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

console.log(`📕 Documentacion disponible en "${HOST}/api/docs"`);

module.exports = { swaggerDocs };
