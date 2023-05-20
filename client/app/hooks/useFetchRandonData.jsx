"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { fetchInfo } from "../services/dolarService";

export default function useFetchRandomData() {
  const [loading, setloading] = useState(false);
  const [randomDataTypes, setRandomData] = useState([
    {
      title: "Reservas del BCRA en dólares",
      endpoint: "/bcra/reservas",
      valor: "",
      moneda: "",
    },
    {
      title: "Total de pesos en circulación",
      endpoint: "/bcra/circulante",
      valor: "",
      moneda: "",
    },
  ]);

  useEffect(() => {
    async function fetchRandomData() {
      setloading(true);
      const updatedData = await Promise.all(
        randomDataTypes.map(async (item) => {
          try {
            const data = await fetchInfo(item.endpoint);

            return {
              ...item,
              valor: data.valor,
              moneda: data.moneda,
            };
          } catch (error) {
            console.error(`Error al obtener los datos de ${item.title}`, error);
            return item;
          }
        })
      );
      setRandomData(updatedData);
      setloading(false);
    }
    fetchRandomData();
  }, []);

  return { randomDataTypes, loading };
}
