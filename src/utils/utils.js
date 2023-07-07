export const moneyFormat = (value) => {
  value = Math.trunc(value);
  return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
