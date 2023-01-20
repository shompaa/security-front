import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchPatent } from "../../store/car";
import { Container } from "../shared/ui";
import { PatentResults } from "./patent-results";

export const PatentsSearch = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [patent, setPatent] = useState("");

  const onSubmit = (data) => {
    console.log(data.patent);
    setPatent(data?.patent);
    dispatch(searchPatent(data?.patent));
  };

  const handleChange = (e) => {
    e.target.value = e.target.value.toUpperCase();
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit(onSubmit);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Container>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Buscar Patentes
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <input
                  type="text"
                  {...register("patent", { required: true })}
                  name="patent"
                  id="patent"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingrese patente"
                  maxLength={6}
                  onChange={handleChange}
                  onKeyDown={handleEnterPress}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-6000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </Container>
        {!!patent && <PatentResults />}
      </div>
    </>
  );
};
