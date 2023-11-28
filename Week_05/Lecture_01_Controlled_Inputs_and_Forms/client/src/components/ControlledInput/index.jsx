import "./ControlledInput.css";

function ControlledInput({
  type,
  label,
  name,
  placeholder = "",
  value,
  onChange,
  error,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={error ? "invalid" : ""}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default ControlledInput;
