export const formatMoney = (item) => {
  const value = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(Number(item));
  return value.slice(0, value.length - 3);
};
