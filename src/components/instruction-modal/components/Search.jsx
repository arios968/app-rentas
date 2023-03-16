import { PROPERTY_TYPES } from "../../header";

export const Search = ({ toggleModal }) => {
  return (
    <div>
      <p className="text-2xl font-bold mb-4  text-gray-medium">
        ¿Como buscar un inmueble por la ubicación?
      </p>
      <div className="input__container">
      <input
        type="text"
        className="input"
      />
      <label className="input__label">
        Ciudad, barrio o sector o sitio de interés
      </label>
      <i className="fa-solid fa-location-dot text-primary absolute right-1.5 top-2.5" />
    </div>

      <p className="text-justify">En esta session puedes buscar por municipio y/o vereda , los resultados apareceran en la parte de abajo segun tu busqueda </p>
      <div className="flex gap-4 justify-center mt-6 items-center">
        <button className="button" onClick={() => toggleModal("instructions")}>
          Aceptar
        </button>
      </div>
    </div>
  );
};
