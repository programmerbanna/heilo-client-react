import React from "react";
import { clx } from "shared/configs";

const Select = ({ onChange, options, className }) => {
  return (
    <select onChange={onChange} className={clx("form-input", className)}>
      {options?.map(({ value, name }, i) => (
        <option key={i} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
