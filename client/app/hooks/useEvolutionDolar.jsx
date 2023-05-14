import { useState, useEffect } from "react";
import { meses } from "../utils/meses";
const useEvolucionDolar = () => {
  const [dolarBlue, setDolarBlue] = useState([]);
  const [dolarOficial, setDolarOficial] = useState([]);

  useEffect(() => {
    const getEvolucionDolar = async () => {
      try {
        const [blueRes, oficialRes, turistaRes] = await Promise.all([
          fetch("http://localhost:3001/api/evolucion/dolarblue"),
          fetch("http://localhost:3001/api/evolucion/dolaroficial"),
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
      } catch (error) {
        console.error(error);
      }
    };
    console.log();
    getEvolucionDolar();
  }, []);

  return { dolarBlue, dolarOficial };
};

export default useEvolucionDolar;
