import student from "assets/img/student.png";
import { StarIcon } from "shared/components/icons";
import { Image } from "shared/components/image";

const StudentInfoCard = ({ userData }) => {
  return (
    <div className="grayDiv rounded-3xl p-8 mt-16">
      <div className="mt-[-90px] mb-6 mx-auto w-fit relative">
        <div className="flex font-bold pl-1 pr-2 pt-0.5 absolute top-0 right-[-14px] rounded-full bg-[#C4C4C4]/50">
          <StarIcon className="text-[#FEDB41] w-5 h-5" />
          <p>4.5</p>
        </div>
        <Image width={120} src={student} alt="student profile picture" />
      </div>
      <div className="flex flex-col">
        <span className="titleTab tabBorder px-2.5 rounded-full border-[2px] border-[#E0E0E0] mt-2 capitalize font-semibold text-[#747474]">
          {/* {userData?.name} */}
        </span>
      </div>
      <div className="mt-6 mb-8">
        <div className="flex">
          <p className="text-white mr-3 bg-[#4CAAF4] w-[200px] rounded-full mb-2 py-1.5 text-center">
            Tution completed
          </p>
          <p className="border-2 border-[#E0E0E0] rounded-full px-7 py-1 mb-2">
            48
          </p>
        </div>
        <div className="flex">
          <p className="text-white mr-3 bg-[#A67DEA] w-[200px] rounded-full py-1.5 text-center">
            Tution reffered
          </p>
          <p className="border-2 border-[#E0E0E0] rounded-full px-7 py-1">27</p>
        </div>
      </div>
      <div className="border-2 border-[#E0E0E0] rounded-3xl p-3">
        <h1 className="text-primaryLight capitalize">about me</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          facilisis aenean et elementum massa.
        </p>
      </div>
    </div>
  );
};

export default StudentInfoCard;
