import { formatMoney } from "../../utils/money";

export const Card = ({ item, index }) => {
  const { price, neighborhood, location, image } = item;

  return (
  <div className="card w-64 shadow-lg rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
    <img className="card__image w-full" src={image} alt="property" />
    <div className="card__body px-4 pt-4 pb-2.5">
      <small className="text-gray-500 text-xs">Desde:</small>
      <p className="font-semibold text-xl">{formatMoney(price)}</p>
      <p className="text-gray-500 text-sm my-2">{neighborhood}</p>
      <p className="text-gray-700 text-xs">
        <i className="fa-solid fa-location-dot" />
        &nbsp; {location.name}
      </p>
      <div className="flex mt-4">
        <small className="flex-1 text-xxs text-center p-1.5 border border-l-0 border-t-0 border-b-0">
          {160 + index} m2
        </small>
        <small className="flex-1 text-xxs text-center p-1.5 border border-l-0 border-t-0 border-b-0">
          {170 + index} m2
        </small>
        <small className="flex-1 text-xxs text-center p-1.5 border border-l-0 border-t-0 border-b-0">
          {180 + index} m2
        </small>
        <small className="flex-1 text-xxs text-center p-1.5">
          {190 + index} m2
        </small>
      </div>
    </div>
  </div>
  );
};
