const { getInfoDolar } = require("../services/dolarSiService");
const { formatNumber } = require("../util/formatNumber");
const { getDateTime } = require("../util/getDateTime");
const { getEvolucion } = require("../util/getEvolucion");

const ERROR = `Error @ controller/euroController --> `;

/**
 * @description Obtener el valor del euro del Banco Nación
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getEuroNacion = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Euro.casa176.compra._text),
      venta: formatNumber(data.cotiza.Euro.casa176.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del euro del Banco Galicia
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getEuroGalicia = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Euro.casa356.compra._text),
      venta: formatNumber(data.cotiza.Euro.casa356.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del euro del Banco BBVA
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getEuroBBVA = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Euro.casa358.compra._text),
      venta: formatNumber(data.cotiza.Euro.casa358.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del euro del Banco de la Pampa
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getEuroPampa = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Euro.casa359.compra._text),
      venta: formatNumber(data.cotiza.Euro.casa359.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del euro del Nuevo Banco del Chaco
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getEuroChaco = async (req, res) => {
  try {
    const data = await this.dolarSiService.getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Euro.casa360.compra._text),
      venta: formatNumber(data.cotiza.Euro.casa360.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del euro del Banco Hipotecario
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getEuroHipotecario = async (req, res) => {
  try {
    const data = await this.dolarSiService.getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Euro.casa361.compra._text),
      venta: formatNumber(data.cotiza.Euro.casa361.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la evolución anual del valor del euro
 * @returns Un objeto con el valor promedio por mes, el mes y el año.
 */
const getEvolucionEuro = async (req, res) => {
  try {
    const data = await this.dolarSiService.getInfoDolar();
    const valores = getEvolucion(data.cotiza.evolucion_dolar.euro.anio);

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

module.exports = {
  getEuroNacion,
  getEuroGalicia,
  getEuroBBVA,
  getEuroPampa,
  getEuroChaco,
  getEuroHipotecario,
  getEvolucionEuro,
};
