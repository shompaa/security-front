import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchPlate } from "../../store/car";
import { Button } from "../shared/ui";

export const PlateSearchByText = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(searchPlate(data?.plate));
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
    <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
      <div>
        <input
          type="text"
          {...register("plate", { required: true })}
          name="plate"
          id="plate"
          className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ingrese patente"
          maxLength={6}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
          required
        />
      </div>
      <div>
        <Button variant="secondary" fullWidth type="submit">
          Buscar
        </Button>
      </div>
    </form>
  );
};
