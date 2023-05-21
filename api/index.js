const app = require("./src/app.js");
const { swaggerDocs } = require("./src/routes/swagger.js");

const PORT = process.env.PORT || 7070;
const DOLARSI_URL = process.env.DOLARSI_URL;
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./swagger_output.json");
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if (!DOLARSI_URL) {
  throw new Error("URL API NO CONFIGURADA");
}

// Iniciando el servidor
app.listen(PORT, async () => {
  app.get("/api/keep-alive");
  console.log("✅ URL API CONFIGURADA");
  console.log(`🚀 Server listening at port: ${PORT}`);
  // sendKeepAliveRequest();
  swaggerDocs(app, PORT);
});

// const sendKeepAliveRequest = (url) => {
//   setInterval(async () => {
//     try {
//       await fetch("http://localhost:3001/api/keep-alive");
//       // console.log("Solicitud de mantenimiento enviada");
//     } catch (error) {
//       console.log(
//         "Error al enviar la solicitud de mantenimiento",
//         error.message
//       );
//       throw new Error("Error al enviar la solicitud de mantenimiento");
//     }
//   }, 10 * 60 * 1000); // 10 minutos en milisegundos
// };
