const { getInfoDolar } = require("../services/dolarSiService");
const { formatNumber } = require("../util/formatNumber");
const { getDateTime } = require("../util/getDateTime");
const { getEvolucion } = require("../util/getEvolucion");

const ERROR = `Error @ controller/dolarController --> `;

/**
 * @description Obtener todos los valores
 * @returns Todos los valores
 */
const getAllValues = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = { valores: data.cotiza };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del dolar oficial
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarOficial = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Dolar.casa344.compra._text),
      venta: formatNumber(data.cotiza.Dolar.casa344.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del dolar blue
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarBlue = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Dolar.casa380.compra._text),
      venta: formatNumber(data.cotiza.Dolar.casa380.venta._text),
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del dolar contado con liqui
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getContadoConLiqui = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(
        data.cotiza.valores_principales.casa312.compra._text
      ),
      venta: formatNumber(data.cotiza.valores_principales.casa312.venta._text),
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del dolar promedio
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarPromedio = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.cotizador.casa302.compra._text),
      venta: formatNumber(data.cotiza.cotizador.casa302.venta._text),
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del dolar bolsa
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarBolsa = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(
        data.cotiza.valores_principales.casa313.compra._text
      ),
      venta: formatNumber(data.cotiza.valores_principales.casa313.venta._text),
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la evolución anual del valor del dolar oficial
 * @returns Un objeto con el valor promedio por mes, el mes y el año.
 */
const getEvolucionDolarOficial = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = getEvolucion(data.cotiza.evolucion_dolar.oficial.anio);

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la evolución anual del valor del dolar blue
 * @returns Un objeto con el valor promedio por mes, el mes y el año.
 */
const getEvolucionDolarBlue = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = getEvolucion(data.cotiza.evolucion_dolar.blue.anio);

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene el valor para la venta del dolar turista
 * @returns Un objeto con el valor de venta y la fecha y hora de la consulta.
 */
const getDolarTurista = async (req, res) => {
  try {
    const data = await getInfoDolar();

    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(
        data.cotiza.valores_principales.casa406.compra._text
      ),
      venta: formatNumber(data.cotiza.valores_principales.casa406.venta._text),
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

module.exports = {
  getAllValues,
  getDolarOficial,
  getDolarBlue,
  getContadoConLiqui,
  getDolarPromedio,
  getDolarBolsa,
  getDolarTurista,
  getEvolucionDolarOficial,
  getEvolucionDolarBlue,
};
