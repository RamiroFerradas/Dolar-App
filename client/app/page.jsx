"use client";
import DolarChart from "./components/DolarChart";
import React from "react";
import { fetchDolar, getEvolucionDolar } from "./services/dolarService";
import DolarInfo from "./components/DolarInfo";

export default async function Home() {
  const { dolarBlue, dolarOficial } = await getEvolucionDolar();
  const dolar = await fetchDolar();

  return (
    <main>
      <div className="h-screen flex flex-col gap-20 md:flex-row md:justify-center items-center bg-gray-200">
        <DolarInfo dolar={dolar} />
        <div className="md:w-[35%] w-screen flex flex-col gap-8 md:justify-center h-screen p-4">
          <p className="text-end text-xs">Actualizacion: {dolar.blue.fecha}</p>
          <div className="flex flex-col">
            <DolarChart data={dolarBlue} />
            <DolarChart data={dolarOficial} />
          </div>
        </div>
      </div>
    </main>
  );
}
