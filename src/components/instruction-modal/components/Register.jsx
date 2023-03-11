import React from "react";

export const Register = ({ goToRegister, openAuthModal }) => {
  return (
    <>
      <h3 className="text-4xl mb-4">Bienvenido</h3>
      <p>
        Para poder interactuar con los inmuebles necesita crear una cuenta o
        iniciar sesión.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <button className="button w-36" onClick={() => openAuthModal("login")}>
          Iniciar sesión
        </button>
        <button className="button w-36" onClick={goToRegister}>
          Crear cuenta
        </button>
      </div>
    </>
  );
};
