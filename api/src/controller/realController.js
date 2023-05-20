const { getInfoDolar } = require("../services/dolarSiService");
const { formatNumber } = require("../util/formatNumber");
const { getDateTime } = require("../util/getDateTime");
const { getEvolucion } = require("../util/getEvolucion");

const ERROR = `Error @ controller/realController --> `;

/**
 * @description Obtener el valor del real del Banco Nación
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getRealNacion = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Real.casa230.compra._text),
      venta: formatNumber(data.cotiza.Real.casa230.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del real del Banco BBVA
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getRealBBVA = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Real.casa365.compra._text),
      venta: formatNumber(data.cotiza.Real.casa365.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del real del Nuevo Banco del Chaco
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getRealChaco = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Real.casa366.compra._text),
      venta: formatNumber(data.cotiza.Real.casa366.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la evolución anual del valor del real
 * @returns Un objeto con el valor promedio por mes, el mes y el año.
 */
const getEvolucionReal = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = getEvolucion(data.cotiza.evolucion_dolar.real.anio);

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

module.exports = { getRealNacion, getRealBBVA, getRealChaco, getEvolucionReal };
