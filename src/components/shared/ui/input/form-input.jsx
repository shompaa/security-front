const inputClass = {
  secondary:
    "bg-amber-700 text-white hover:bg-amber-600 focus:bg-amber-600 border-transparent",
  primary:
    "bg-slate-100 text-white hover:bg-slate-200 focus:bg-slate-200 border-transparent",
  dark:
    "border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",
};

const FormInput = ({
  type = "text",
  register,
  schema,
  name,
  label,
  placeholder,
  required,
  variant = "primary",
  ...inputProps
}) => {
  const getInputClass = () => {
    const className = inputClass[variant];
    return className || inputClass.primary;
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <input
        {...register(name, schema[name])}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={getInputClass()}
        {...inputProps}
      />
    </div>
  );
};

export default FormInput;
