import useDolarEvolucion from "../../hooks/useEvolutionDolar";
import Loading from "../../loading";
import Chart from "./Chart";
import SkeletonChart from "./SkeletonChart";
import ChartSkeleton from "./SkeletonChart";

export default function DolarChart() {
  const { evolucionDolarBlue, evolucionDolarOficial, isLoading, fecha } =
    useDolarEvolucion();

  const chartsData = [evolucionDolarBlue, evolucionDolarOficial];

  return (
    <div className="flex flex-col gap-1 items-center">
      <p className="text-end text-xs">Actualizacion: {fecha}</p>
      <div className="flex flex-col gap-1 justify-center items-center md:w-[35vw] w-screen">
        {chartsData.map((data, i) => {
          return isLoading ? <SkeletonChart /> : <Chart data={data} key={i} />;
        })}
      </div>
    </div>
  );
}
