"use client";
import { BancosJson } from "../utils/bancos";
import useFetchBancos from "../hooks/useFetchBancos";
import SkeletonField from "../components/SkeletonField";

export default function Bancos() {
  const { bancoSeleccionado, setBancoSeleccionado, loading } = useFetchBancos();

  // const refNav = useRef(null);
  return (
    <div
      className={`flex justify-center items-center md:gap-20 border- h-[calc(100vh-80px)] md:h-[80vh] w-screen md:w-auto`}
    >
      <div className="md:w-3/4 gap-5 h-full overflow-y-auto rounded-lg md:p-2 grid grid-cols-1 md:grid-cols-3 justify-center items-center">
        {BancosJson.map((banco) => (
          <div
            key={banco.name}
            className={`py-2 px-4 min-h-[3rem] overflow-hidden ${
              banco.name === bancoSeleccionado.name
                ? "text-lg md:text-xl font-bold border-gray-900 rounded-md border-4"
                : ""
            } hover:border-gray-300 border-4 md:max-w-[20rem] text-center rounded-md  hover:text-xl hover:font-bold `}
          >
            <p
              className="cursor-pointer"
              onClick={() => {
                setBancoSeleccionado(banco);
              }}
            >
              {banco.name}
            </p>
          </div>
        ))}
      </div>

      <div className="md:w-1/4 flex flex-col items-center justify-center">
        <div>
          <h2 className="md:text-3xl text-lg font-bold text-center mb-4">
            {bancoSeleccionado?.name}
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-bold">Fecha: </p>
          {loading ? <SkeletonField /> : <p>{bancoSeleccionado?.fecha}</p>}
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-bold text-red-500">Compra:</p>
          {loading ? <SkeletonField /> : <p>{bancoSeleccionado?.compra}</p>}
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-bold text-green-500">Venta:</p>

          {loading ? <SkeletonField /> : <p>{bancoSeleccionado?.venta}</p>}
        </div>
      </div>
    </div>
  );
}
