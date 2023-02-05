import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// custom components
import { clx } from "shared/configs";

const Image = ({ src, alt, className }) => {
  return (
    <>
      <LazyLoadImage
        src={src}
        alt={alt?.alt}
        className={clx("w-full h-full", className)}
      />
    </>
  );
};

export default Image;
