import "./SearchInput.scss";

export const SearchInput = ({ value = "", handleChange }) => {
  return (
    <div className="input__container">
      <input
        type="text"
        className="input"
        value={value}
        onChange={handleChange}
      />
      <label className={`${value ? "filled" : ""} input__label`}>
        Ciudad, barrio o sector o sitio de interés
      </label>
      <i className="fa-solid fa-location-dot text-primary absolute right-1.5 top-2.5" />
    </div>
  );
};
