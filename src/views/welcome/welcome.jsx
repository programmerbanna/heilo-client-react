import React from "react";

// custom imports
import logo from "assets/img/logo.png";
import wave from "assets/img/opening-wave1.png";
import { Image } from "shared/components/image";
import { BtnSecondary } from "shared/components/button";

const Welcome = () => {
  return (
    // <div className="max-w-[calc(1673px+253px)] mx-auto bg-primaryDark min-h-screen flex">
    <div className="relative flex justify-center h-screen">
      <div className="relative z-10 openingLogo">
        <Image src={logo} alt="Hero Section Image" layout="fill" />
      </div>
      <div className="absolute bottom-0 flex items-center justify-center openingWave">
        <Image
          src={wave}
          alt="Hero Section Image"
          layout="fill"
          position="bottom"
        />
        <div className="z-20 pt-20">
          <BtnSecondary
            className="z-20 mr-60"
            label="Student"
            link="/student/category"
          />
          <BtnSecondary className="z-20" label="Teacher" link="/teacher" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Welcome;
