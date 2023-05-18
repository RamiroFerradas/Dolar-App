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
      {/* <Navbar /> */}

      <div className="h-screen flex flex-col gap-20 md:flex-row justify-center items-center bg-gray-200">
        <DolarInfo dolar={dolar} />
        <div className="w-[35%] flex flex-col gap-8 justify-center h-screen p-4">
          {/* <p className="text-end text-xs">Actualizacion: {dolar.blue.fecha}</p> */}

          <div>
            <DolarChart dolarBlue={dolarBlue} />
            <DolarChart data={dolarOficial} />
          </div>
        </div>
      </div>
    </main>
  );
}
