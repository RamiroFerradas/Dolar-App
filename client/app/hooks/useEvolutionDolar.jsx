import { useEffect, useState } from "react";
import { getEvolucionDolar } from "../services/dolarService";

const useDolarEvolucion = () => {
  const [evolucionDolarBlue, setDolarBlue] = useState([]);
  const [evolucionDolarOficial, setDolarOficial] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { dolarBlue, dolarOficial } = await getEvolucionDolar();
        setDolarBlue(dolarBlue);
        setDolarOficial(dolarOficial);
      } catch (error) {
        console.error("Error fetching dolar evolucion:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { evolucionDolarBlue, evolucionDolarOficial, isLoading };
};

export default useDolarEvolucion;
