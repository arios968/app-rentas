import { useContext } from "react";
import { SearchInput } from "../search-input";
import { AuthContext } from "../../context/AuthProvider";
import { PropertyContext as context } from "../../context/PropertyProvider";
import { PROPERTY_TYPES } from ".";
import "./Header.scss";
import { getInstructions, setInstructions } from "../../utils/modal";

export const Header = ({
  setAuthModal,
  toggleModal,
  setCurrentInstruction,
}) => {
  const { closeSession, user } = useContext(AuthContext);
  const { location, setLocation, types, toggleTypes } = useContext(context);
  const instructions = getInstructions();

  const showAppModal = (authModal) => {
    toggleModal("auth");
    setAuthModal(authModal);
  };

  const filterByType = (type) => {
    if (!instructions?.types) {
      setInstructions({ ...instructions, types: true });
      setCurrentInstruction("types");
      return toggleModal("instructions");
    }
    toggleTypes(type);
  };

  const doFirstSearch = () => {
    if (!instructions?.search) {
      setInstructions({ ...instructions, search: true });
      toggleModal("instructions");
      setCurrentInstruction("search");
    }
  };

  return (
    <header className="header bg-primary">
      <section className="flex items-center gap-4 ">
        <SearchInput
          value={location}
          handleChange={({ target }) => setLocation(target.value)}
          onClick={doFirstSearch}
        />
        {PROPERTY_TYPES.map((item) => (
          <button
            key={item}
            className={`header__filtering-button ${
              types.includes(item) ? "bg-gray-medium text-white" : ""
            }`}
            onClick={() => filterByType(item)}
          >
            {item}
          </button>
        ))}
      </section>
      <section className="flex gap-6 text-sm">
        {user.authenticated ? (
          <>
            <button
              className="border rounded-full px-5 py-1.5 text-white bg-gray-medium flex gap-2 items-center font-light"
              onClick={() => toggleModal("postProperty")}
            >
              Publicar
              <i className="fa-solid fa-bag-shopping" />
            </button>
            <button
              className="flex items-center text-white gap-1"
              onClick={closeSession}
            >
              <i className="fa-solid fa-right-from-bracket text-white text-xl" />
              <span>Cerrar sesión</span>
            </button>
          </>
        ) : (
          <>
            <button
              className="text-white font-semibold underline"
              onClick={() => showAppModal("login")}
            >
              Ingresar
            </button>
            <button
              className="text-white font-semibold underline"
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
