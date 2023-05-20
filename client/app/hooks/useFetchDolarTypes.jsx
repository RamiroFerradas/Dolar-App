import { useEffect, useState } from "react";
import { fetchDolar } from "../services/dolarService";

export default function useFetchDolarTypes() {
  const [dolar, setDolar] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const dolarData = await fetchDolar();
        setDolar(dolarData);
      } catch (error) {
        console.error("Error fetching dolar types:", error.message);
      } finally {
        setloading(false);
      }
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

  return { dolarTypes, dolar, loading };
}
