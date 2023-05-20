import useDolarEvolucion from "../../hooks/useEvolutionDolar";
import SkeletonField from "../SkeletonField";
import Chart from "./Chart";
import SkeletonChart from "./SkeletonChart";

export default function DolarChart() {
  const { evolucionDolarBlue, evolucionDolarOficial, isLoading, fecha } =
    useDolarEvolucion();

  const chartsData = [evolucionDolarBlue, evolucionDolarOficial];

  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="flex justify-center items-center">
        <p className="text-en text-xs mr-2">Actualizacion: </p>
        {!fecha ? (
          <SkeletonField />
        ) : (
          <p className="text-end text-xs">{fecha}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 justify-center items-center md:w-[35vw] w-screen">
        {chartsData.map((data, i) => {
          return isLoading ? (
            <SkeletonChart key={i} />
          ) : (
            <Chart data={data} key={i} />
          );
        })}
      </div>
    </div>
  );
}
