export const getItems = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData;
};

export const setItems = (items) => {
  localStorage.setItem("userData", JSON.stringify(items));
};
