import { useEffect, useState } from "react";
import { fetchDolar } from "../services/dolarService";

export default function useFetchDolarTypes() {
  const [dolar, setDolar] = useState({});

  useEffect(() => {
    async function fetchData() {
      const dolarData = await fetchDolar();
      setDolar(dolarData);
    }
    fetchData();
  }, []);

  const dolarTypes = [
    {
      title: "Dolar Blue",
      compra: dolar.blue?.compra,
      venta: dolar.blue?.venta,
    },
    {
      title: "Dolar Oficial",
      compra: dolar.dolaroficial?.compra,
      venta: dolar.dolaroficial?.venta,
    },
    {
      title: "Dólar Contado con Liqui",
      compra: dolar.contadoliqui?.compra,
      venta: dolar.contadoliqui?.venta,
    },
    {
      title: "Dolar Turista",
      compra: dolar.dolarturista?.compra,
      venta: dolar.dolarturista?.venta,
    },
  ];

  return { dolarTypes };
}
