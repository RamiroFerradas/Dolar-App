"use client";
import { useState } from "react";

import useFetchDolarTypes from "../hooks/useFetchDolarTypes";

export default function Calculadora() {
  const [valorIngresado, setValorIngresado] = useState("");
  const [tipoCambio, setTipoCambio] = useState("");
  const [resultado, setResultado] = useState("");
  const [buttonCompraVenta, setbuttonCompraVenta] = useState("venta");
  const { dolarTypes } = useFetchDolarTypes();
  const handleValorIngresadoChange = (event) => {
    setValorIngresado(event.target.value);
  };

  const handleTipoCambioChange = (event) => {
    setTipoCambio(event.target.value);
  };

  const handleCalcular = () => {
    const tipoCambioSeleccionado = dolarTypes.find(
      (tipo) => tipo.title === tipoCambio
    );
    if (tipoCambioSeleccionado) {
      const resultadoCalculo =
        valorIngresado * tipoCambioSeleccionado[buttonCompraVenta];
      setResultado(resultadoCalculo);
    } else {
      setResultado("Seleccione un tipo de cambio válido");
    }
  };

  return (
    <div className="container mx-auto py-8 flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Calculadora de tipo de cambio</h1>
      <div className="flex flex-col">
        <label className="mb-2">
          Cantidad a {buttonCompraVenta === "venta" ? "vender" : "comprar"}:
        </label>
        <input
          type="number"
          className="border border-gray-300 px-4 py-2"
          value={valorIngresado}
          onChange={handleValorIngresadoChange}
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className="mb-2">Tipo de cambio:</label>
        <select
          className="border border-gray-300 px-4 py-2"
          value={tipoCambio}
          onChange={handleTipoCambioChange}
        >
          <option className="text-red-500" value="">
            Seleccione un tipo de cambio
          </option>
          {dolarTypes?.map((tipo) => (
            <option key={tipo.title} value={tipo.title}>
              {tipo.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
          onClick={handleCalcular}
        >
          Calcular
        </button>
        <button
          disabled={buttonCompraVenta === "compra"}
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 disabled:bg-green-400 isabled:hover:bg-green-500 enabled:hover:bg-green-600"
          onClick={() => setbuttonCompraVenta("compra")}
        >
          Compra
        </button>
        <button
          disabled={buttonCompraVenta === "venta"}
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 disabled:bg-red-400 isabled:hover:bg-red-500 enabled:hover:bg-red-600"
          onClick={() => setbuttonCompraVenta("venta")}
        >
          Venta
        </button>
      </div>
      <div className="mt-4">
        <strong>Resultado:</strong> {resultado}
      </div>
    </div>
  );
}
