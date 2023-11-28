import { useRef, useEffect } from "react";
import "./ControlledInput.css";

const ControlledInput = ({
  type = "text",
  label = "",
  name = "",
  value = "",
  onChange = () => {},
  error = "",
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label || name || ""}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        invalid={(error !== "").toString()}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default ControlledInput;
