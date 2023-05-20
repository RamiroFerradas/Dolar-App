const { getInfoDolar } = require("../services/dolarSiService");
const { formatNumber } = require("../util/formatNumber");
const { getDateTime } = require("../util/getDateTime");

const ERROR = `Error @ controller/casasController --> `;

/**
 * @description Obtiene la cotizacion de Metropolis Compania Financiera
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarMetro = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa340.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa340.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Cambio Alpe
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarAlpe = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa338.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa338.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Francisco Vaccaro
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarVaccaro = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa339.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa339.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Transatlantica
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarTransatlantica = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa343.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa343.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Jonestur
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarJonestur = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Mar_del_Plata.casa23.compra._text),
      venta: formatNumber(data.cotiza.Mar_del_Plata.casa23.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de La Moneta Cambio
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarMoneta = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Mar_del_Plata.casa24.compra._text),
      venta: formatNumber(data.cotiza.Mar_del_Plata.casa24.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Mar del Plata Exchange
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarExchange = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Mar_del_Plata.casa400.compra._text),
      venta: formatNumber(data.cotiza.Mar_del_Plata.casa400.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Daminato Viajes y Cambios
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarDaminato = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Rosario.casa28.compra._text),
      venta: formatNumber(data.cotiza.Rosario.casa28.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Monetemar Compania Financiera
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarMontemar = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Mendoza.casa58.compra._text),
      venta: formatNumber(data.cotiza.Mendoza.casa58.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Casa de Cambio Los Tilos
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarLosTilos = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.La_Plata.casa350.compra._text),
      venta: formatNumber(data.cotiza.La_Plata.casa350.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtiene la cotizacion de Maguitur
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarMaguitur = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Tucuman.casa115.compra._text),
      venta: formatNumber(data.cotiza.Tucuman.casa115.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

module.exports = {
  getDolarMetro,
  getDolarAlpe,
  getDolarVaccaro,
  getDolarJonestur,
  getDolarMoneta,
  getDolarExchange,
  getDolarDaminato,
  getDolarMontemar,
  getDolarLosTilos,
  getDolarMaguitur,
  getDolarTransatlantica,
};
