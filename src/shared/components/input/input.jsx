import React from "react";
import { clx } from "shared/configs";

const Input = ({
  onChange,
  className,
  type,
  name,
  placeholder,
  readOnly,
  required,
}) => {
  return (
    <input
      onChange={onChange}
      className={clx("form-input", className)}
      type={type}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
    />
  );
};

export default Input;
