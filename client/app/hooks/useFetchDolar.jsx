"use client";
import { useEffect, useState } from "react";

export default function useFetchDolar() {
  const [loading, setLoading] = useState(true);
  const [dolar, setDolar] = useState({
    blue: {},
    contadoliqui: {},
    dolarturista: {},
    dolaroficial: {},
  });

  async function fetchDolar() {
    try {
      const BASE_URL = "http://localhost:3001/api";
      const blue = await fetch(`${BASE_URL}/dolarblue`);
      const contadoliqui = await fetch(`${BASE_URL}/contadoliqui`);
      const dolarturista = await fetch(`${BASE_URL}/dolarturista`);
      const dolaroficial = await fetch(`${BASE_URL}/dolaroficial`);

      const data = {
        blue: await blue.json(),
        contadoliqui: await contadoliqui.json(),
        dolarturista: await dolarturista.json(),
        dolaroficial: await dolaroficial.json(),
      };

      setDolar(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDolar();
  }, []);

  return { loading, dolar };
}
