import { meses } from "../utils/meses";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchDolar = async () => {
  try {
    const [
      blueResponse,
      contadoliquiResponse,
      dolarturistaResponse,
      dolaroficialResponse,
    ] = await Promise.all([
      fetch(`${BASE_URL}/api/dolarblue`),
      fetch(`${BASE_URL}/api/contadoliqui`),
      fetch(`${BASE_URL}/api/dolarturista`),
      fetch(`${BASE_URL}/api/dolaroficial`),
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

    // const blueRes = await fetchData(`${BASE_URL}/api/evolucion/dolarblue`);
    // const oficialRes = await fetchData(
    //   `${BASE_URL}/api/evolucion/dolaroficial`
    // );

    const blue = await blueRes.json();
    const oficial = await oficialRes.json();

    const blueData = blue.meses;
    const oficialData = oficial.meses;

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

    return { dolarBlue, dolarOficial };
  } catch (error) {
    console.error(error);
    throw error.message;
  }
};
