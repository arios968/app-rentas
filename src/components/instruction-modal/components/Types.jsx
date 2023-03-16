import { PROPERTY_TYPES } from "../../header";

export const Types = ({ toggleModal }) => {
  return (
    <>
      <p className="text-2xl font-bold mb-4 text-gray-medium">
        ¿Como filtrar los inmuebles?
      </p>
      <p className="text-start text-sm pl-2 mb-2">
        ● Presione uno de los botones
      </p>
      <div className="flex justify-center gap-4 my-4">
        {PROPERTY_TYPES.map((type) => (
          <button key={type} className="header__filtering-button  bg-primary">
            {type}
          </button>
        ))}
      </div>
      <p className="text-start text-sm pl-2">
        ● Después de seleccionar un tipo se verá de la siguiente forma:
      </p>
      <button className={`header__filtering-button bg-primary text-white my-4`}>
        Fincas
      </button>
      <p className="text-start text-sm pl-2">
        ● Puede seleccionar uno o varios tipos al tiempo
      </p>
      <div className="flex justify-center gap-4 my-4  ">
        {PROPERTY_TYPES.map((type, index) => (
          <button
            key={type}
            className={`bg-primary header__filtering-button ${
              index ? "bg-primary text-white" : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <p className="text-start text-sm pl-2 mb-2">
        ● Si no selecciona ninguno, se mostraran todos los resultados
      </p>
      <div className="flex justify-center gap-4 my-4">
        {PROPERTY_TYPES.map((type) => (
          <button key={type} className="header__filtering-button bg-primary">
            {type}
          </button>
        ))}
      </div>
      <div className="flex gap-4 justify-center mt-6 items-center">
        <button className="button" onClick={() => toggleModal("instructions")}>
          Aceptar
        </button>
      </div>
    </>
  );
};
