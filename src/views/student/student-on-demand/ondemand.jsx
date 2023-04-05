import notification from "assets/img/notification.svg";
import profileIcon from "assets/img/profileIcon.svg";
import { Image } from "shared/components/image";
import Notifications from "./fuatures/notifications";
import StudentFindTutor from "./fuatures/student-find-tutor";

const ondemand = () => {
  return (
    <>
      <div className="w-full flex justify-end items-center">
        <div className="flex items-center space-x-8">
          <div className="w-[28px] h-[35px]">
            <Image src={notification} />
          </div>
          <div className="w-[60] h-[60]">
            <Image src={profileIcon} />
          </div>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col gap-[38.56px] md:gap-[70px]">
        <div className=" w-full  flex flex-col md:flex-row gap-[46px]">
          <div className="  w-full px-3 md:px-[55px] pb-[22px] md:pb-8 pt-10 md:pt-0 rounded-[30px] h-[calc(100vh-100px)]   relative">
            <StudentFindTutor />
          </div>

          <div className=" bg-[#f8f8f8] w-full px-3 md:px-[55px] pb-[22px] md:pb-8 rounded-[30px] h-[calc(100vh-100px)] md:h-[calc(100vh-360px)]">
            <Notifications />
          </div>
        </div>
      </div>
    </>
  );
};

export default ondemand;
