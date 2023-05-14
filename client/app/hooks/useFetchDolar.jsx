"use client";
import { useEffect, useState } from "react";

export default function useFetchDolar() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [loading, setLoading] = useState(true);
  const [dolar, setDolar] = useState({
    blue: {},
    contadoliqui: {},
    dolarturista: {},
    dolaroficial: {},
  });

  async function fetchDolar() {
    try {
      const blue = await fetch(`${BASE_URL}/api/dolarblue`);
      const contadoliqui = await fetch(`${BASE_URL}/api/contadoliqui`);
      const dolarturista = await fetch(`${BASE_URL}/api/dolarturista`);
      const dolaroficial = await fetch(`${BASE_URL}/api/dolaroficial`);

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
  console.log(dolar);
  useEffect(() => {
    fetchDolar();
  }, []);

  return { loading, dolar };
}
