import { meses } from "../utils/meses";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getEvolucionDolar = async () => {
  try {
    const [blueRes, oficialRes] = await Promise.all([
      fetch(`${BASE_URL}/api/evolucion/dolarblue`),
      fetch(`${BASE_URL}/api/evolucion/dolaroficial`),
    ]);

    const [blueData, oficialData] = await Promise.all([
      blueRes.json(),
      oficialRes.json(),
    ]);

    const dolarBlue = {
      title: "Dolar blue",
      labels: blueData.meses.map((mes) => meses[mes.mes - 1]),
      values: blueData.meses.map((mes) => Number(Math.floor(mes.valor))),
    };

    const dolarOficial = {
      title: "Dolar oficial",
      labels: oficialData.meses.map((mes) => meses[mes.mes - 1]),
      values: oficialData.meses.map((mes) => Number(Math.floor(mes.valor))),
    };

    return { dolarBlue, dolarOficial };
  } catch (error) {
    console.error(error);
  }
};

export default getEvolucionDolar;
