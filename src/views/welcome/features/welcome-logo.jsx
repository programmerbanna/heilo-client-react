import React from "react";

// custom imports
import logo from "assets/img/logo.png";
import { Image } from "shared/components/image";

const WelcomeLogo = () => {
  return (
    <div className="absolute -top-[200px] z-10 w-[300px] h-[220px] md:w-[502px] md:h-[231px]">
      <Image src={logo} alt="Hero Section Image" layout="fill" />
    </div>
  );
};

export default WelcomeLogo;
