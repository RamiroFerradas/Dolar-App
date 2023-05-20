const { getInfoDolar } = require("../services/dolarSiService");
const { formatNumber } = require("../util/formatNumber");
const { getDateTime } = require("../util/getDateTime");

const ERROR = `Error @ controller/riesgoController --> `;

/**
 * @description Obtener el valor del riesgo pais
 * @returns Un objeto con el valor del riesgo pais y la fecha y hora de la consulta
 */
const getRiesgoPais = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      valor: formatNumber(data.cotiza.Riesgo_pais.casa141.compra._text, 3),
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

module.exports = { getRiesgoPais };
