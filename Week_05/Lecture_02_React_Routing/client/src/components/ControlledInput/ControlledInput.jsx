import "./ControlledInput.css";

function ControlledInput({
  type,
  name,
  label,
  value = "",
  onChange,
  error,
  placeholder = "",
  autoComplete = false,
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
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default ControlledInput;
