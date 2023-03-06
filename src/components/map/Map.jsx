import React, { useContext, useState } from "react";
import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { PropertyContext } from "../../context/PropertyProvider";
import { formatMoney } from "../../utils/money";
import { CENTER } from ".";
import "./Map.scss";

export const Map = () => {
  const { properties } = useContext(PropertyContext);
  const [activeCard, setActiveCard] = useState("");

  const toggleCard = ({ target }, item) => {
    setActiveCard(target.id === "closeCard" ? "" : item.id);
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={CENTER}
        zoom={12}
      >
        {properties.map((item) => (
          <OverlayView
            position={item.location.coordinates}
            mapPaneName="floatPane"
            key={item.id}
          >
            <button
              className="map__marker"
              onClick={(e) => toggleCard(e, item)}
            >
              <i className="fa-solid fa-building" />
              <span>{formatMoney(item.price)}</span>
              {activeCard === item.id && <MarkerCard item={item} />}
            </button>
          </OverlayView>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export const MarkerCard = ({ item }) => {
  const { image, price, neighborhood, location } = item;
  return (
    <div className="map__marker-card">
      <div
        className="map__card-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex-1 p-2 text-sm relative">
        <button className="absolute -right-2 -top-4">
          <i
            className="fa-solid fa-circle-xmark text-primary text-2xl"
            id="closeCard"
          />
        </button>
        <p className="text-start text-gray-600 font-light">Valor</p>
        <p className="text-start text-primary font-semibold border border-l-0 border-r-0 border-t-0 pb-1 text-xs">
          {formatMoney(price)}
        </p>
        <p className="text-start text-gray-600 font-light mt-2">
          {neighborhood}
        </p>
        <p className="text-start border border-l-0 border-r-0 border-t-0 pb-1 text-xs text-gray-700">
          <i className="fa-solid fa-location-dot" />
          &nbsp;
          <span className="text-xs ">{location.name}.</span>
        </p>
        <div className="p-2 text-gray-700 flex gap-1 justify-center text-xxs">
          <div>
            <i className="fa-solid fa-bed" />
            &nbsp; 2
          </div>
          <div className="border border-b-0 border-t-0 px-1.5">
            <i className="fa-solid fa-toilet" />
            &nbsp; 2
          </div>
          <div>
            <i className="fa-solid fa-ruler-combined" />
            &nbsp; 54.3 m2
          </div>
        </div>
      </div>
    </div>
  );
};
