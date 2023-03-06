import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword as createUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "../../firebase/config";
import { Input } from "../input";
import { AuthContext } from "../../context/AuthProvider";
import { modalStyles, getErrors } from ".";

export const Auth = ({ showModal, toggleModal, isLogin = true }) => {
  const { openSession } = useContext(AuthContext);

  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    setErrors(getErrors(data));
  }, [data, validate]);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const closeModal = () => {
    toggleModal("login");
    setData({ email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && errors.length) return setValidate(true);
    isLogin ? login(data) : registerUser(data);
  };

  const registerUser = async ({ email, password }) => {
    try {
      setErrors([]);
      const { user } = await createUser(FirebaseAuth, email, password);
      openSession(user.uid);
      toast.success("Usuario registrado correctamente!!");
      closeModal();
    } catch (error) {
      const repeatedEmail = error.message.includes("email-already-in-use");
      toast.error(
        repeatedEmail ? "El email ya se encuentra registrado" : "Hubo un error"
      );
    }
  };

  const login = async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      openSession(user.uid);
      toast.success("Bienvenido!!");
      closeModal();
    } catch (error) {
      toast.error("Credenciales incorrectas!!");
    }
  };

  return (
    <Modal isOpen={showModal} style={modalStyles}>
      <form className="py-12 px-4 relative">
        <button
          className="top-0 right-0 absolute"
          type="button"
          onClick={closeModal}
        >
          <i className="fa-sharp fa-solid fa-circle-xmark text-primary text-2xl cursor-pointer" />
        </button>
        <h3 className="text-gray-500 text-2xl font-bold mb-8 text-center">
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </h3>
        <div className="flex flex-col gap-5">
          <Input
            className="login-input"
            label="Correo electrónico"
            name="email"
            handleChange={handleChange}
            value={data.email}
          />
          <Input
            className="login-input"
            label="Contraseña"
            type="password"
            name="password"
            handleChange={handleChange}
            value={data.password}
          />
        </div>
        {isLogin && (
          <p className="text-primary underline font-semibold mt-3 text-sm">
            ¿Olvidaste tu contraseña?
          </p>
        )}
        <div className="flex flex-col gap-0.5 text-xs text-red-700 mt-2">
          {!!(validate && !isLogin) &&
            errors.map((error) => <span key={error}>{error}</span>)}
        </div>
        <button
          className="border rounded-full px-5 py-1.5 text-white flex gap-2 items-center font-light mx-auto mt-6 bg-primary"
          type="submit"
          onClick={handleSubmit}
        >
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </button>
      </form>
    </Modal>
  );
};
