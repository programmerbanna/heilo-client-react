import student from "assets/img/student.png";
import verifiedUser from "assets/img/verified-user.svg";
import { useState } from "react";
import { StarIcon } from "shared/components/icons";
import { Image } from "shared/components/image";
import { Scrollbar } from "shared/components/scrollbar";

const TutionCompleted = () => {
  return (
    <div className="mb-3 cursor-pointer bg-[#F1F1F1] p-1 rounded-2xl">
      <div className="flex items-center text-textSecondary font-semibold text-[10px] justify-between h-[128px] px-[52px]">
        <div className="w-fit relative">
          <div className="flex font-bold pl-1 pr-2 pt-0.5 absolute top-0 right-[-14px] rounded-full bg-[#C4C4C4]/50">
            <StarIcon className="text-[#FEDB41] w-5 h-5" />
            <p>4.5</p>
          </div>
          <div className="w-[98px] h-[98px]">
            <Image width={98} src={student} alt="student profile picture" />
          </div>
        </div>
        <div className="">
          <h1 className="text-[#444F55] font-semibold text-lg mb-1">
            SAKIB ABDULLAH
          </h1>
          <p className="text-[#7D7C7C] font-light text-[13px] leading-[20px] capitalize">
            bangladesh University Of Professionals
          </p>
          <div className="flex items-center space-x-2 mt-1">
            <div className="w-6 h-6">
              <Image src={verifiedUser} width={24} />
            </div>
            <p className="text-[#7D7C7C] font-normal text-[13px] leading-[20px] capitalize">
              Accounting , Finance, English, ICT
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <button className="bg-white rounded-[10px] px-10 py-2 text-[#444F55] font-semibold text-lg">
            450/hr
          </button>
          <button className="bg-[#01B489] rounded-[10px] px-10 py-2 font-semibold text-lg text-white">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

const StudentFindTutor = () => {
  const [value, setValue] = useState(30);

  const handleChange = (e) => {
    setValue(e.target.value);
    const progress =
      (e.target.value - e.target.min) / (e.target.max - e.target.min);
    e.target.style.background = `linear-gradient(to right, #1be59d 0%, #1be59d ${
      progress * 100
    }%, #B7B7B7 ${progress * 100}%, #B7B7B7 100%)`;
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex relative md:w-[452px] ">
          <div className="flex border-[5px] border-[#E4E4E4] rounded-l-[40px] md:w-[372px]">
            <select className="block w-[155px] apperance md:py-3.5 px-5 rounded-tl-full rounded-bl-full  bg-transparent text-[#444F55] font-normal text-base outline-none">
              <option value="P">Physics</option>
              <option value="P">Chemistry</option>
              <option value="P">Biology</option>
              <option value="P">Higher Math</option>
              <option value="P">Bangla</option>
              <option value="P">English</option>
            </select>
            <select className="block w-[155px] apperance md:py-3.5 px-5 bg-transparent text-[#444F55] font-normal text-base outline-none">
              <option value="P">Physics</option>
              <option value="P">Chemistry</option>
              <option value="P">Biology</option>
              <option value="P">Higher Math</option>
              <option value="P">Bangla</option>
              <option value="P">English</option>
            </select>
          </div>

          <button
            type="submit"
            className="text-white absolute right-[-40px] font-medium bg-[#01B489] w-[132px] md:w-[165px] h-[62px]  rounded-[0px_40px_40px_45px]  text-[22px] leading-[33px] px-8 py-3.5 "
          >
            SEARCH
          </button>
        </div>

        <div className="flex mt-8 items-center">
          <div className="">
            <input
              className="rangeSlider"
              type="range"
              min="0"
              max="60"
              value={value}
              onChange={handleChange}
              style={{
                appearance: "none",
                background:
                  "linear-gradient(to right, #1be59d 0%, #1be59d 50%, #B7B7B7 50%, #B7B7B7 100%)",
                width: "185px",
                height: "7px",
                borderRadius: "8px",
                outline: "none",
                transition: "background 450ms ease-in",
              }}
            />
          </div>

          <div className="flex space-x-6 items-center ml-7 ">
            <div className="flex space-x-1 items-center">
              <input
                type="checkbox"
                class="form-checkbox rounded-full border-gray-400 border-2 h-5 w-5 text-green-500 transition duration-150 ease-in-out"
              />

              <label htmlFor="Male ">Male </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                type="checkbox"
                class="form-checkbox rounded-full border-gray-400 border-2 h-5 w-5 text-green-500 transition duration-150 ease-in-out"
              />

              <label htmlFor="Female ">Female </label>
            </div>
          </div>

          <select
            name="Availability"
            className="flex w-[160px] md:ml-6 apperance md:py-1.5 md:px-4 rounded-full !border !border-[#14181f14] bg-[rgba(248,248,248,0.05)] text-[#444F55] font-normal text-base outline-none"
          >
            <option value="P">Availability </option>
            <option value="P">Chemistry</option>
            <option value="P">Biology</option>
            <option value="P">Higher Math</option>
            <option value="P">Bangla</option>
            <option value="P">English</option>
          </select>

          <div class="relative w-[160px] ml-6">
            <div class="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-[#8E9093]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full md:w-[160px] pl-[35px] py-3 text-sm font-semibold text-[#14181f7a] border border-[#14181f14] rounded-lg bg-[#f8f8f8c] outline-none"
              placeholder="Search by ID"
              required
            />
          </div>
        </div>
      </div>

      <div className=" w-full h-[calc(83vh-100px)] pt-10 overflow-x-hidden">
        <Scrollbar>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <TutionCompleted />
          ))}
        </Scrollbar>
      </div>
    </>
  );
};

export default StudentFindTutor;
