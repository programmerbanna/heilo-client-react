import React from "react";
import { clx } from "shared/configs";

const Image = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt?.alt} className={clx("w-full h-full", className)} />
  );
};

export default Image;
