import { isValidEmail } from "../../utils/validation";

export * from "./Auth";

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

export const getErrors = ({ password, email }) => {
  const errors = [];
  if (!password || !email) return ["Todos los campos son obligatorios"];
  if (password.length < 6) {
    errors.push("La contraseña debe tener al menos 6 caracteres.");
  }
  if (!isValidEmail(email)) {
    errors.push("El correo ingresado no es válido.");
  }
  return errors;
};
