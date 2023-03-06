import "./Input.scss";

export const Input = ({
  className = "",
  handleChange,
  label,
  name,
  type = "text",
  value,
}) => {
  return (
    <div className="input__container">
      <input
        type={type}
        className={`input ${className}`}
        value={value}
        name={name}
        onChange={handleChange}
      />
      <label className={`${value ? "filled" : ""} input__label`}>{label}</label>
    </div>
  );
};
