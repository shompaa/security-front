import { useEffect, useState } from "react";
import { usePlateStore } from "../../store";
import { usePlate } from "./hooks/use-plate";
import { Container } from "../shared/ui";

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

  return (
    <Container>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        {isRefetching || isLoading ? (
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-amber-600">
            Cargando...
          </h1>
        ) : isError ? (
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-amber-600">
            No se encontraron resultados
          </h1>
        ) : data ? (
          <>
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-amber-600">
              Resultados
            </h1>
            <h5 className="text-xs font-bold leading-tight tracking-tight md:text-sm text-slate-900">
              <p>
                <span className="font-bold">Patente: </span>
                {data?.plate}
              </p>
              <p>
                <span className="font-bold">Marca: </span>
                {data?.brand}
              </p>
              <p>
                <span className="font-bold">Modelo: </span>
                {data?.model}
              </p>
              <p>
                <span className="font-bold">Año: </span>
                {data?.year}
              </p>
              <p>
                <span className="font-bold">Color: </span>
                {data?.color}
              </p>
              <p>
                <span className="font-bold">Dirección: </span>
                {data?.address?.street} {data?.address?.number}
              </p>
            </h5>
          </>
        ) : (
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-lg text-amber-600">
            No se encontraron resultados
          </h1>
        )}
      </div>
    </Container>
  );
};
