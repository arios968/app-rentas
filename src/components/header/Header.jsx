import { useContext, useState } from "react";
import { SearchInput } from "../search-input";
import { AuthContext } from "../../context/AuthProvider";
import { PropertyContext as context } from "../../context/PropertyProvider";
import { PROPERTY_TYPES } from ".";
import "./Header.scss";

export const Header = ({ setAuthModal, toggleModal }) => {
  const { closeSession, user } = useContext(AuthContext);
  const { location, setLocation, types, toggleTypes } = useContext(context);

  const showAppModal = (authModal) => {
    toggleModal("auth");
    setAuthModal(authModal);
  };

  return (
    <header className="header">
      <section className="flex items-center gap-4">
        <SearchInput
          value={location}
          handleChange={({ target }) => setLocation(target.value)}
        />
        {PROPERTY_TYPES.map((item) => (
          <button
            key={item}
            className={`header__filtering-button ${
              types.includes(item) ? "bg-primary text-white" : ""
            }`}
            onClick={() => toggleTypes(item)}
          >
            {item}
          </button>
        ))}
      </section>
      <section className="flex gap-6 text-sm">
        {user.authenticated ? (
          <>
            <button
              className="border rounded-full px-5 py-1.5 text-white bg-primary flex gap-2 items-center font-light"
              onClick={() => toggleModal("postProperty")}
            >
              Publicar
              <i className="fa-solid fa-bag-shopping" />
            </button>
            <button
              className="flex items-center text-primary gap-1"
              onClick={closeSession}
            >
              <i className="fa-solid fa-right-from-bracket text-primary text-xl" />
              <span>Cerrar sesión</span>
            </button>
          </>
        ) : (
          <>
            <button
              className="text-primary font-semibold underline"
              onClick={() => showAppModal("login")}
            >
              Ingresar
            </button>
            <button
              className="text-primary font-semibold underline"
              onClick={() => showAppModal("register")}
            >
              Crear cuenta
            </button>
          </>
        )}
      </section>
    </header>
  );
};
