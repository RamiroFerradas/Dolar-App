const app = require("./src/app.js");
const { swaggerDocs } = require("./src/routes/swagger.js");

// const { swaggerDocs } = require("./src/routes/swagger.js");

const PORT = process.env.PORT || 7070;

// Starting the server
app.listen(PORT, async () => {
  console.log(`🚀 Server listening at port: ${PORT}`);
  swaggerDocs(app, PORT);
});
