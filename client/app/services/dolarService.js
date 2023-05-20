import { meses } from "../utils/meses";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchDolar = async () => {
  try {
    const [
      blueResponse,
      contadoliquiResponse,
      dolarturistaResponse,
      dolaroficialResponse,
    ] = await Promise.all([
      fetch(`${BASE_URL}/api/dolar/dolarblue`),
      fetch(`${BASE_URL}/api/dolar/contadoliqui`),
      fetch(`${BASE_URL}/api/dolar/dolarturista`),
      fetch(`${BASE_URL}/api/dolar/dolaroficial`),
    ]);

    const blue = await blueResponse.json();
    const contadoliqui = await contadoliquiResponse.json();
    const dolarturista = await dolarturistaResponse.json();
    const dolaroficial = await dolaroficialResponse.json();

    const data = {
      blue: blue,
      contadoliqui,
      dolarturista,
      dolaroficial,
    };

    return data;
  } catch (error) {
    console.error(error);
    throw error.message;
  }
};

export const getEvolucionDolar = async () => {
  try {
    const [blueRes, oficialRes] = await Promise.all([
      fetch(`${BASE_URL}/api/evolucion/dolarblue`),
      fetch(`${BASE_URL}/api/evolucion/dolaroficial`),
    ]);

    const blue = await blueRes.json();
    const oficial = await oficialRes.json();

    const blueData = blue.meses;
    const oficialData = oficial.meses;
    const fecha = blue.fecha;

    const dolarBlue = {
      title: "Dolar blue",
      labels: blueData.map((mes) => meses[mes.mes - 1]),
      values: blueData.map((mes) => Math.floor(Number(mes.valor))),
    };

    const dolarOficial = {
      title: "Dolar oficial",
      labels: oficialData.map((mes) => meses[mes.mes - 1]),
      values: oficialData.map((mes) => Math.floor(Number(mes.valor))),
    };

    return { dolarBlue, dolarOficial, fecha };
  } catch (error) {
    console.error(error);
    throw error.message;
  }
};

export const fetchInfo = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/api${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos del banco", error);
    throw error;
  }
};
