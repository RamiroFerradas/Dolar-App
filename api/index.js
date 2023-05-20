const app = require("./src/app.js");
const { swaggerDocs } = require("./src/routes/swagger.js");

const PORT = process.env.PORT || 7070;
const DOLARSI_URL = process.env.DOLARSI_URL; // Asumiendo que DOLARSI_URL es una variable de entorno

// Comprobación de la configuración de la URL
if (!DOLARSI_URL) {
  throw new Error("URL API NO CONFIGURADA");
}

// Iniciando el servidor
app.listen(PORT, async () => {
  console.log("✅ URL API CONFIGURADA");
  console.log(`🚀 Server listening at port: ${PORT}`);
  swaggerDocs(app, PORT);
});
