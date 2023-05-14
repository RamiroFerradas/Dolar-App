"use client";
import DolarChart from "./DolarChart";
import useEvolucionDolar from "./hooks/useEvolutionDolar";
import useFetchDolar from "./hooks/useFetchDolar";

export default function Home() {
  var { dolar, loading } = useFetchDolar();
  const { dolarOficial, dolarBlue, loadEvolution } = useEvolucionDolar();

  loading = loading || loadEvolution;

  const dolarTypes = [
    {
      title: "Dolar Blue",
      compra: dolar.blue.compra,
      venta: dolar.blue.venta,
    },
    {
      title: "Dolar Oficial",
      compra: dolar.dolaroficial.compra,
      venta: dolar.dolaroficial.venta,
    },
    {
      title: "Dólar Contado con Liqui",
      compra: dolar.contadoliqui.compra,
      venta: dolar.contadoliqui.venta,
    },
    {
      title: "Dolar Turista",
      compra: dolar.dolarturista.compra,
      venta: dolar.dolarturista.venta,
    },
  ];

  return (
    <div className="w-screen flex-wrap flex gap-20 md:flex-row justify-center items-center h-screen bg-gray-200">
      {loading ? (
        <p className="text-lg font-medium text-gray-600">Cargando...</p>
      ) : (
        <div className="flex flex-col justify-center items-center gap-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          {dolarTypes.map(({ title, compra, venta }) => (
            <div className="mb-8 w-80">
              <h2 className="text-3xl font-bold text-center text-gray-700">
                {title}
              </h2>
              <div className="flex flex-row justify-between text-lg text-gray-600">
                <p>Compra: {compra}</p>
                <p>Venta: {venta}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {loading ? (
        <p className="text-lg font-medium text-gray-600">Cargando...</p>
      ) : (
        <div className="md:w-[30%]">
          <DolarChart data={dolarBlue} />
          <DolarChart data={dolarOficial} />
        </div>
      )}
    </div>
  );
}
