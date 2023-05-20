"use client";
import Marquee from "react-fast-marquee";

import DolarChart from "./components/DolarChart";
import DolarInfo from "./components/DolarInfo";

import useFetchRandomData from "./hooks/useFetchRandonData";
import { addDotsToNumber } from "./utils/addDotsToNumber";

import useDolarEvolucion from "./hooks/useEvolutionDolar";
import useFetchDolarTypes from "./hooks/useFetchDolarTypes";
import Loading from "./loading";

export default function Inicio() {
  const { dolar, loading } = useFetchDolarTypes();
  const { randomDataTypes } = useFetchRandomData();
  const { evolucionDolarBlue, evolucionDolarOficial, isLoading } =
    useDolarEvolucion();

  const load = loading && isLoading;

  return load ? (
    <Loading />
  ) : (
    <main>
      <Marquee
        autoFill
        pauseOnHover
        className="text-green-100 bg-gray-400"
        direction="rigth"
        gradient={false}
      >
        {randomDataTypes.map(({ title, valor }, i) => (
          <div key={i} className="mr-4">
            <p>
              {title}: ${addDotsToNumber(valor)}
            </p>
          </div>
        ))}
      </Marquee>
      <div className="h-screen flex flex-col gap-20 md:flex-row md:justify-center items-center bg-gray-200">
        <DolarInfo dolar={dolar} />
        <div className="md:w-[35%] w-screen flex flex-col gap-8 md:justify-center h-screen p-4">
          <p className="text-end text-xs">
            Actualizacion: {dolar?.blue?.fecha}
          </p>
          <div className="flex flex-col">
            <DolarChart data={evolucionDolarBlue} />
            <DolarChart data={evolucionDolarOficial} />
          </div>
        </div>
      </div>
    </main>
  );
}
