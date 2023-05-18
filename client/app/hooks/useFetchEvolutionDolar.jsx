import React, { useEffect, useState } from "react";
import { meses } from "../utils/meses";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function useFetchEvolutionDolar() {
  const [dolarOficial, setDolarOficial] = useState([]);
  const [dolarBlue, setDolarBlue] = useState([]);
  const [loadEvolution, setloadEvolution] = useState(true);

  useEffect(() => {
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

        setDolarBlue({
          title: "Dolar blue",
          labels: blueData.meses.map((mes) => meses[mes.mes - 1]),
          values: blueData.meses.map((mes) => Number(Math.floor(mes.valor))),
        });
        setDolarOficial({
          title: "Dolar oficial",
          labels: oficialData.meses.map((mes) => meses[mes.mes - 1]),
          values: oficialData.meses.map((mes) => Number(Math.floor(mes.valor))),
        });
        setloadEvolution(false);
      } catch (error) {
        console.error(error);
      }
    };

    getEvolucionDolar();
  }, []);
  return { dolarBlue, dolarOficial, loadEvolution };
}
