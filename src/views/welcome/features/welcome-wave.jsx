import React from "react";

// custom imports
import wave from "assets/img/opening-wave1.png";
import { Image } from "shared/components/image";
import { Button } from "shared/components/button";
import { StudentBook } from "shared/components/icons/welcome/student-book";
import { TeacherTeaching } from "shared/components/icons/welcome/teacher-teaching";

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
        <Button
          className="z-20 w-[350px] bg-white h-[70px] rounded-[50px]"
          label="Student"
          link="/student/category"
          icon={<StudentBook />}
        />
        <Button
          className="z-20 w-[350px] bg-white h-[70px] rounded-[50px]"
          label="Teacher"
          link="/teacher"
          icon={<TeacherTeaching />}
        />
      </div>
    </>
  );
};

export default WelcomeWave;
