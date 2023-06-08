import { useEffect, useState } from "react";
import {usePlateStore } from "../../store";
import { usePlate } from "./hooks/use-plate";

export const PlateResults = () => {
  const { plate } = usePlateStore();
  const [term, setTerm] = useState("");
  const { data, isLoading, refetch, isError, isRefetching, error } =
    usePlate(plate);

  useEffect(() => {
    setTerm(plate);
  }, [plate]);

  useEffect(() => {
    if (term || plate) {
      refetch();
    }
  }, [plate]);
  
  if (isRefetching || isLoading) {
    return (
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Resultados
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-700 border-gray-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  Cargando...
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Resultados
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-700 border-gray-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                  No se encontraron resultados
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return data ? (
    <ResponseComponent>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h5 className="text-xs font-bold leading-tight tracking-tight md:text-sm text-white">
          <p>
            <span className="font-bold">platee: </span>
            {data.plate}
          </p>
          <p>
            <span className="font-bold">Marca: </span>
            {data.brand}
          </p>
          <p>
            <span className="font-bold">Modelo: </span>
            {data.model}
          </p>
          <p>
            <span className="font-bold">Año: </span>
            {data.year}
          </p>
          <p>
            <span className="font-bold">Color: </span>
            {data.color}
          </p>
          <p>
            <span className="font-bold">Dueño: </span>
            {data.owner.name} {data.owner.lastName}
          </p>
        </h5>
      </div>
    </ResponseComponent>
  ) : (
    // alert no se encuentran resultados
    <ResponseComponent>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-lg text-white">
          No se encontraron resultados
        </h1>
      </div>
    </ResponseComponent>
  );
};

const ResponseComponent = ({ children }) => {
  return (
    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-700 border-gray-800 text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
