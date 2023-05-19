"use client";
import { BancosJson } from "../utils/bancos";
import useFetchBancos from "../hooks/useFetchBancos";
import SkeletonField from "../components/SkeletonField";

export default function Bancos() {
  const { bancoSeleccionado, setBancoSeleccionado, loading } = useFetchBancos();

  return (
    <div className="flex justify-center items-center md:gap-20 border-4 bg-gray-200 border-gray-400 h-[87vh]">
      <div className="w-[60rem] md:h-auto h-[80vh] mr-8 overflow-y-auto rounded-lg md:p-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        {BancosJson.map((banco) => (
          <div
            key={banco.name}
            className={`py-2 px-4 h-18 ${
              banco.name === bancoSeleccionado.name
                ? "text-lg md:text-xl font-bold border-gray-300 rounded-md border-4"
                : ""
            } hover:border-gray-300 border-4 md:max-w-[20rem] text-center rounded-md  hover:text-xl hover:font-bold `}
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

      <div className="w-[40vw] flex flex-col items-center justify-center">
        <h2 className="md:text-3xl text-lg font-bold text-center mb-4">
          {bancoSeleccionado?.name}
        </h2>

        <div>
          <div className="flex gap-2">
            <p className="font-bold">Fecha: </p>
            <p>{loading ? <SkeletonField /> : bancoSeleccionado?.fecha}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold text-red-500">Compra:</p>
            <p>{loading ? <SkeletonField /> : bancoSeleccionado?.compra}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold text-green-500">Venta:</p>
            <p className="">
              {loading ? <SkeletonField /> : bancoSeleccionado?.venta}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
