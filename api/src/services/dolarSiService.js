const convert = require("xml-js");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const { DOLARSI_URL } = process.env;

/**
 * @description Obtener un json parseado con los valores de dolarSi
 */
const parseJson = (xmlData) => {
  const json = convert.xml2json(xmlData, { compact: true, spaces: 4 });
  return JSON.parse(json);
};

const getInfoDolar = async () => {
  try {
    const dataDolar = await axios.get(DOLARSI_URL);
    const jsonParsed = parseJson(dataDolar.data);

    return jsonParsed;
  } catch (e) {
    console.log(e.message);
    throw new Error("Error al obtener información del servicio de DolarSi");
  }
};

// Función para realizar la solicitud cada 10 minutos
// const keepServerAlive = () => {
//   setInterval(async () => {
//     try {
//       await axios.get("/keep-alive");
//       console.log("Solicitud de mantenimiento enviada");
//     } catch (error) {
//       console.log(
//         "Error al enviar la solicitud de mantenimiento",
//         error.message
//       );
//     }
//   }, 1 * 60 * 1000); // 10 minutos en milisegundos
// };

// Llamar a la función para mantener vivo el servidor
// keepServerAlive();

module.exports = {
  getInfoDolar,
};
