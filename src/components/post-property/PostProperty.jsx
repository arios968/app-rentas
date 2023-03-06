import React, { useContext, useMemo, useRef, useState } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import Modal from "react-modal";
import { Input } from "../input";
import { PropertyContext } from "../../context/PropertyProvider";
import { modalStyles, defaultProperty } from ".";

export const PostProperty = ({ showModal, toggleModal }) => {
  const { postProperty, property, setProperty } = useContext(PropertyContext);
  const [validate, setValidate] = useState(false);
  const inputRef = useRef();
  const { type, phone, price, neighborhood, image, location } = property;

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setProperty({
        ...property,
        location: {
          name: place.formatted_address,
          coordinates: place.geometry.location,
        },
      });
    }
  };

  const handleDataChange = ({ target }) => {
    setProperty({ ...property, [target.name]: target.value });
  };

  const closeModal = () => {
    toggleModal("postProperty");
    setProperty(defaultProperty);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasErrors()) return setValidate(true);
    postProperty();
    toggleModal("postProperty");
  };

  const hasErrors = () => {
    if (!location.name) return true;
    return ![type, phone, price, neighborhood, image].every((item) => item);
  };

  const errors = useMemo(() => validate && hasErrors(), [property, validate]);

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
          Publicar propiedad
        </h3>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="type">
              Tipo de inmueble
            </label>
            <select
              className="input"
              id="type"
              value={type}
              name="type"
              onChange={handleDataChange}
            >
              {["Fincas", "Lotes", "Viviendas"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <Input
            label="Teléfono"
            name="phone"
            handleChange={handleDataChange}
            value={phone}
            type="number"
          />
          <Input
            label="Barrio / Conjunto"
            name="neighborhood"
            handleChange={handleDataChange}
            value={neighborhood}
          />
          <Input
            label="Precio"
            name="price"
            handleChange={handleDataChange}
            value={price}
            type="number"
          />
          <Input
            label="Imagen (url)"
            name="image"
            handleChange={handleDataChange}
            value={image}
          />
          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_MAP_KEY}
            libraries={["places"]}
          >
            <StandaloneSearchBox
              onLoad={(ref) => (inputRef.current = ref)}
              onPlacesChanged={handlePlaceChanged}
            >
              <input
                type="text"
                className="input w-full relative bottom-4"
                placeholder="Selecciona la ubicación"
                onChange={({ target }) => {
                  if (!target.value)
                    setProperty({
                      ...property,
                      location: { name: "", coordinates: {} },
                    });
                }}
              />
            </StandaloneSearchBox>
          </LoadScript>
        </div>
        {errors && (
          <span className="flex flex-col gap-0.5 text-xs text-red-700 mt-2 relative bottom-4">
            *Todos los campos son obligatorios
          </span>
        )}
        <button
          className="border rounded-full px-5 py-1.5 text-white bg-primary flex gap-2 items-center font-light mx-auto"
          type="submit"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </form>
    </Modal>
  );
};
