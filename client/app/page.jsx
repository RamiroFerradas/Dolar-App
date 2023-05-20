"use client";
import DolarChart from "./components/DolarChart/DolarChart";
import DolarInfo from "./components/DolarInfo/DolarInfo";

export default function Inicio() {
  return (
    <main className="w-screen">
      <div className="flex flex-col  md:flex-row justify-center md:items-start items-center p-1 gap-5 md:gap-0 ">
        <div className="grid grid-cols-2 justify-center items-center gap-2 bg-gray-100 rounded-lg shadow-lg w-screen md:w-[50vw] md:h-[70vh]">
          <DolarInfo />
        </div>
        <div className="md:w-[50vw] flex flex-col gap-8 md:justify-start items-center ">
          <DolarChart />
        </div>
      </div>
    </main>
  );
}
