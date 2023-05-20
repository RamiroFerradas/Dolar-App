import { useEffect, useState } from "react";
import { BancosJson } from "../utils/bancos";
import { fetchInfoBancos } from "../services/bancosService";
// import { fetchInfo } from "../services/dolarService";

export default function useFetchBancos() {
  const [bancoSeleccionado, setBancoSeleccionado] = useState({
    name: BancosJson[0].name,
    endpoint: `${BancosJson[0].endpoint}`,
    compra: "",
    venta: "",
    fecha: "",
  });

  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      setloading(true);
      const data = await fetchInfoBancos(bancoSeleccionado.endpoint);

      const { compra, venta, fecha } = data;

      setBancoSeleccionado((prevState) => ({
        ...prevState,
        compra,
        venta,
        fecha,
      }));
      setloading(false);
    } catch (error) {
      console.error("Error al obtener los datos del banco", error);
    }
  };
  useEffect(() => {
    if (bancoSeleccionado.endpoint) {
      fetchData();
    }
  }, [bancoSeleccionado.endpoint]);

  return { bancoSeleccionado, setBancoSeleccionado, loading, fetchData };
}
