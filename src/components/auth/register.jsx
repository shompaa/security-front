import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "../../hooks";
// import { checkingAuth } from "../../store";

export const Register = () => {
  const dispatch = useDispatch();
  // const { status } = useSelector((state) => state.auth);
  // const { email, password, name, lastName, rut, password2, handleChange, formState } = useForm({
  //   name: "admin",
  //   lastName: "test",
  //   rut: "12345678-9",
  //   email: "admin@test.cl",
  //   password: "asd",
  //   password2: "asd",
  // });
  // const isAutenticated = useMemo(() => status === "checking", [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(checkingAuth());
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Registrate
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={handleChange}
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Apellido"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="rut"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Rut
                </label>
                <input
                  type="text"
                  name="rut"
                  id="rut"
                  value={rut}
                  onChange={handleChange}
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Rut"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Correo"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className=" border m:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password2"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Repetir contraseña
                </label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  value={password2}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className=" border m:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="0 text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline text-primary-500"
                >
                  Forgot password?
                </a> */}
              </div>
              <button
                type="submit"
                disabled={isAutenticated}
                className={`w-full text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800 ${
                  isAutenticated
                    ? "opacity-50 cursor-not-allowed outline-0"
                    : ""
                }}`}
              >
                Crear cuenta
              </button>
              {/* <p className="text-sm font-light  text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline text-primary-500"
                >
                  Sign up
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
