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

module.exports = {
  getInfoDolar,
};
