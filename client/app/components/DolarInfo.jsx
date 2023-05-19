import useFetchDolarTypes from "../hooks/useFetchDolarTypes";

export default function DolarInfo() {
  const { dolarTypes } = useFetchDolarTypes();

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-6 bg-gray-100 rounded-lg shadow-lg w-[40% h-full">
      {dolarTypes?.map(({ title, compra, venta }, i) => (
        <div key={i} className="mb-8 w-80">
          <p className="text-2xl font-bold text-center text-gray-700">
            {title}
          </p>
          <div className="flex flex-row justify-between text-lg text-gray-600">
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
      ))}
    </div>
  );
}
