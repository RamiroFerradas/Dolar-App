"use client";
import { BancosJson } from "../utils/bancos";
import useFetchBancos from "../hooks/useFetchBancos";

export default function Bancos() {
  const { bancoSeleccionado, setBancoSeleccionado, loading } = useFetchBancos();

  return (
    <div className="flex justify-center items-center gap-20 border-4 bg-gray-200 border-gray-400 h-[87vh]">
      <div className="mr-8 overflow-y-auto rounded-lg p-4 grid grid-cols-2 w-2/3">
        {BancosJson.map((banco) => (
          <div
            key={banco.name}
            className={`py-2 px-4 h-14 ${
              banco.name === bancoSeleccionado.name
                ? "text-xl font-bold border-gray-300 rounded-md border-4"
                : ""
            } hover:border-gray-300 border-4 max-w-[20rem] text-center rounded-md  hover:text-xl hover:font-bold `}
          >
            <p
              className="cursor-pointer"
              onClick={() => setBancoSeleccionado(banco)}
            >
              {banco.name}
            </p>
          </div>
        ))}
      </div>

      <div className="w-1/3">
        <div>
          <h2 className="text-3xl font-bold mb-4">{bancoSeleccionado?.name}</h2>
          {loading ? (
            <p>cargando</p>
          ) : (
            <div>
              <p className="font-bold">Fecha: {bancoSeleccionado?.fecha}</p>
              <div className="flex gap-2">
                <p className="font-bold text-red-500">Compra:</p>
                <p>{bancoSeleccionado?.compra}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold text-green-500">Venta:</p>
                <p className="">{bancoSeleccionado?.venta}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
