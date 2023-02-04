import React from "react";

// custom imports
import wave from "assets/img/opening-wave1.png";
import { Image } from "shared/components/image";
import { BtnSecondary } from "shared/components/button";

const WelcomeWave = () => {
  return (
    <>
      <Image
        src={wave}
        alt="Hero Section Image"
        layout="fill"
        position="bottom"
      />

      <div className="z-20 mt-20 absolute flex flex-col items-center gap-5 md:flex-row md:gap-[72px]">
        <BtnSecondary
          className="z-20"
          label="Student"
          link="/student/category"
        />
        <BtnSecondary className="z-20" label="Teacher" link="/teacher" />
      </div>
    </>
  );
};

export default WelcomeWave;
