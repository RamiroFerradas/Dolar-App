const convert = require("xml-js");
const axios = require("axios");

/**
 * @description Obtener un json parseado con los valores de dolarSi
 */
const getInfoDolar = async () => {
  try {
    const dataDolar = await axios.get(
      "https://www.dolarsi.com/api/dolarSiInfo.xml"
    );
    const json = convert.xml2json(dataDolar.data, { compact: true, spaces: 4 });
    const jsonParsed = JSON.parse(json);

    return jsonParsed;
  } catch (e) {
    console.log(e);
    throw new Error("Error al obtener información del servicio de DolarSi");
  }
};

module.exports = {
  getInfoDolar,
};
