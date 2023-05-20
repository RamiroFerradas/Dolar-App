const { formatNumber } = require("../util/formatNumber");
const { getInfoDolar } = require("../services/dolarSiService");
const { getDateTime } = require("../util/getDateTime");

const ERROR = `Error @ controller/bancosController --> `;

/**
 * @description Obtener las cotizaciones del Banco BBVA
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarBBVA = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa336.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa336.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Piano
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarPiano = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa37.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa37.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Hipotecario
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarHipotecario = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa217.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa217.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Galicia
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarGalicia = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa342.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa342.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Santander
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarSantander = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa401.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa401.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Ciudad de Buenos Aires
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarCiudad = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa402.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa402.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Supervielle
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarSupervielle = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa403.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa403.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Patagonia
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarPatagonia = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa404.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa404.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Comafi
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarComafi = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa405.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa405.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Nación
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarNacion = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa6.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa6.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco Industrial
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarBIND = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa22.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa22.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Nuevo Banco del Chaco
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarChaco = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa334.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa334.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco de La Pampa
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarPampa = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa335.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa335.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones del Banco de Córdoba
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarBancor = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Capital_Federal.casa341.compra._text),
      venta: formatNumber(data.cotiza.Capital_Federal.casa341.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener las cotizaciones de Mayorista Bancos
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
const getDolarMayorista = async (req, res) => {
  try {
    const data = await getInfoDolar();
    const valores = {
      fecha: getDateTime(),
      compra: formatNumber(data.cotiza.Dolar.casa44.compra._text),
      venta: formatNumber(data.cotiza.Dolar.casa44.venta._text),
    };
    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

module.exports = {
  getDolarBBVA,
  getDolarPampa,
  getDolarPiano,
  getDolarHipotecario,
  getDolarGalicia,
  getDolarSantander,
  getDolarCiudad,
  getDolarSupervielle,
  getDolarPatagonia,
  getDolarComafi,
  getDolarNacion,
  getDolarBIND,
  getDolarChaco,
  getDolarBancor,
  getDolarMayorista,
};
