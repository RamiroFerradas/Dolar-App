import useFetchDolarTypes from "../../hooks/useFetchDolarTypes";
import Loading from "../../loading";
import SkeletonDolarInfo from "./SkeletonDolarInfo";

export default function DolarInfo() {
  const { dolarTypes, loading } = useFetchDolarTypes();

  return dolarTypes.map(({ title, compra, venta }, i) => {
    return loading ? (
      <SkeletonDolarInfo key={i} />
    ) : (
      <div
        key={i}
        className="mb-8 md:w-80 flex  justify-center flex-col items-center"
      >
        <p className="md:text-2xl font-bold text-center text-gray-700">
          {title}
        </p>
        <div className="flex flex-row gap-5 md:justify-around text-lg text-gray-600">
          <label>
            <p className="text-green-400">Compra: </p>
            <p>{compra}</p>
          </label>
          <label>
            <p className="text-red-400">Venta:</p>
            <p> {venta}</p>
          </label>
        </div>
      </div>
    );
  });
}
