export const sortArray = (array, key) => {
  return [...array]?.sort((a, b) => a[key] - b[key]);
};

export const toggleItems = (array, value) => {
  return array.includes(value)
    ? array.filter((item) => item !== value)
    : [...array, value];
};
