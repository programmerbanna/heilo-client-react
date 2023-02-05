import React from "react";
import { clx } from "shared/configs";

const checkbox = ({ onChange, className }) => {
  return (
    <input
      onChange={onChange}
      type="checkbox"
      className={clx(
        "border-primaryLight text-primaryLight focus:ring-primaryLight",
        className
      )}
    />
  );
};

export default checkbox;
