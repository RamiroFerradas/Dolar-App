const { getInfoDolar } = require("../services/dolarSiService");
const { formatNumber } = require("../util/formatNumber");
const { getDateTime } = require("../util/getDateTime");

const ERROR = `Error @ controller/bcraController --> `;

/**
 * @description Obtener el valor de las reservas del BCRA expresadas en dólares.
 * @returns Un objeto con el valor de las reservas, la moneda y la fecha-hora de la consulta
 */
const getReservas = async (req, res) => {
  try {
    const data = await getInfoDolar();
    let reservasDolares = formatNumber(
      data.cotiza.Reservas_y_circulante.casa394.compra._text
    );
    if (reservasDolares !== "?") {
      reservasDolares = BigInt(reservasDolares * 1000) * BigInt(1000000);
    }
    const valores = {
      fecha: getDateTime(),
      valor: reservasDolares.toString(),
      moneda: "USD",
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

/**
 * @description Obtener el valor del total circulante expresado en pesos argentinos.
 * @returns Un objeto con el valor del circulante, la moneda y la fecha-hora de la consulta
 */
const getCirculante = async (req, res) => {
  try {
    const data = await getInfoDolar();
    let circulantePesos = formatNumber(
      data.cotiza.Reservas_y_circulante.casa395.compra._text
    );
    if (circulantePesos !== "?") {
      circulantePesos = BigInt(circulantePesos * 1000) * BigInt(1000000);
    }
    const valores = {
      fecha: getDateTime(),
      valor: circulantePesos.toString(),
      moneda: "ARS",
    };

    res.send(valores);
  } catch (e) {
    res.sendStatus(500);
    console.error(ERROR, e.message);
  }
};

module.exports = { getCirculante, getReservas };
