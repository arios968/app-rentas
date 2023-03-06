export * from "./PostProperty";

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 0px 5px 1px rgba(184,184,191,1)",
  },
};

export const defaultProperty = {
  location: { name: "", coordinates: {} },
  type: "Viviendas",
  phone: "",
  price: "",
  neighborhood: "",
  image: "",
};
