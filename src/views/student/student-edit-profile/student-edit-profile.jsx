import { Scrollbar } from "shared/components/scrollbar";
import { useGetUserInfoQuery } from "shared/redux/features/student/studentApi";
import arrow from "../../../assets/img/arrow.svg";
import StudentInfoCard from "./features/student-info-card";

const StudentEditProfile = () => {
  const { data } = useGetUserInfoQuery();

  // const { result } = data;

  console.log("result", data);

  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-12 gap-6 mt-3">
        <div className="md:col-span-4 ">
          <StudentInfoCard />
        </div>
        <div className="md:col-span-8 ">
          <Scrollbar className="!h-[calc(100vh-100px)]">
            <div className="grayDiv p-4 px-8 rounded-3xl pb-[46px]">
              <div className="flex w-full justify-between items-center">
                <div className="titleTab bg-[#3DDEA5] text-white">
                  Basic Information
                </div>
                <button className="titleTab bg-[#C4C4C4] opacity-30 font-semibold !text-[#1BE59D]">
                  EDIT
                </button>
              </div>

              <div className="grid grid-rows-1 md:grid-cols-12 gap-4 mt-10">
                <div className="md:col-span-4 w-[300px]  inline-block relative h-[50px]">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] w-full"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="inputField"
                    className="block px-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-[270px]"
                    placeholder="Sakib  Abdullah"
                  />
                </div>
                <div className="md:col-span-4 w-[300px] inline-block relative h-[50px]">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] w-full"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="inputField"
                    className="block px-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-[280px]"
                    placeholder="sakib.abdullah@gmail.com"
                  />
                </div>
                <div className="md:col-span-4  inline-block relative h-[50px]">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D]"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="inputField"
                    className="block px-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full"
                    placeholder="01765646564"
                  />
                </div>
              </div>

              <div className="grid grid-rows-1 md:grid-cols-12 mt-10">
                <div className="md:col-span-2 w-[150px] inline-block relative h-[50px] ">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] "
                  >
                    Division
                  </label>

                  <select className=" pl-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full selectDvision">
                    <option value="">Dhaka</option>
                    <option value="">Chittagong</option>
                    <option value="">Rangpur</option>
                    <option value="">Khulna</option>
                  </select>
                  <div className="absolute right-[25px] top-[22px]">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>

                <div className="md:col-span-3 w-[150px] inline-block relative h-[50px]">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] w-full"
                  >
                    Village, Upazila
                  </label>
                  <input
                    type="text"
                    name="inputField"
                    className="block px-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full"
                    placeholder="Meherchun.."
                  />
                </div>
                <div className="md:col-span-6  inline-block relative h-[50px]">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D]"
                  >
                    Gender
                  </label>
                  <select className=" pl-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full selectDvision">
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Others</option>
                  </select>
                  <div className="absolute right-[25px] top-[22px]">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grayDiv p-4 rounded-3xl mt-4  pb-[27px] px-8">
              <div className="titleTab bg-[#3DDEA5] text-white">Education</div>
              <div className="grid grid-rows-1 md:grid-cols-12 gap-4 mb-9 mt-4">
                <div className="md:col-span-6 w-[385px] inline-block relative h-[50px] ">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] "
                  >
                    Current Instituite
                  </label>

                  <select className=" pl-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full selectDvision">
                    <option value="">
                      Maple Leaf International School and College
                    </option>
                    <option value="">
                      Maple Leaf International School and College
                    </option>
                    <option value="">
                      Maple Leaf International School and College
                    </option>
                    <option value="">
                      Maple Leaf International School and College
                    </option>
                  </select>
                  <div className="absolute right-[25px] top-[22px]">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="md:col-span-6 w-[385px] inline-block relative h-[50px] ">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] "
                  >
                    Class
                  </label>

                  <select className=" pl-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full selectDvision">
                    <option value="">STD- VI</option>
                    <option value="">STD- VI</option>
                    <option value="">STD- VI</option>
                    <option value="">STD- VI</option>
                  </select>
                  <div className="absolute right-[25px] top-[22px]">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>

              <div className="grid  grid-rows-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6 w-[385px] inline-block relative h-[50px] ">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] "
                  >
                    Medium
                  </label>

                  <select className=" pl-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full selectDvision">
                    <option value="">English Medium</option>
                    <option value="">Bangla Medium</option>
                    <option value="">English Medium</option>
                    <option value="">Bangla Medium</option>
                  </select>
                  <div className="absolute right-[25px] top-[22px]">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="md:col-span-6 w-[385px] inline-block relative h-[50px] ">
                  <label
                    for="inputField"
                    className="absolute left-6 top-1 text-sm font-light text-[#7D7D7D] "
                  >
                    Background
                  </label>

                  <select className=" pl-6 pt-4 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full selectDvision">
                    <option value="">Science</option>
                    <option value="">Science</option>
                    <option value="">Science</option>
                    <option value="">Science</option>
                  </select>
                  <div className="absolute right-[25px] top-[22px]">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grayDiv p-4 rounded-3xl mt-4  pb-[27px] px-8">
              <div className="flex justify-between items-center">
                <div className="flex space-x-[30px]">
                  <div className="titleTab bg-[#3DDEA5] text-white">
                    Account Details
                  </div>

                  <h2 className="text-[#1BE59D] font-normal text-xl">
                    Change Password
                  </h2>
                </div>

                <button className="titleTab bg-[#C4C4C4] opacity-30 font-semibold !text-[#1BE59D]">
                  EDIT
                </button>
              </div>

              <div className="flex justify-evenly items-center mb-9 mt-4">
                <div className=" w-[224px]  inline-block relative h-[50px]">
                  <input
                    type="text"
                    name="inputField"
                    className="block px-6  outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-[270px]"
                    placeholder="Current Password"
                  />
                </div>

                <div className=" w-[224px]  inline-block relative h-[50px]">
                  <input
                    type="text"
                    name="inputField"
                    className="block px-6  outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-[270px]"
                    placeholder="New Password"
                  />
                </div>
              </div>
            </div>

            <div className="grayDiv p-4 rounded-3xl mt-4  pb-[27px] px-8">
              <div className="flex justify-between items-center">
                <div className="titleTab bg-[#3DDEA5] text-white">
                  Attachments{" "}
                </div>

                <button className="titleTab bg-[#C4C4C4] opacity-30 font-semibold !text-[#1BE59D]">
                  EDIT
                </button>
              </div>

              <div className="flex justify-start items-center mb-9 mt-4">
                <div className=" w-[461px]  inline-block relative h-[50px] ml-[56px]">
                  <h1 className="text-[#747474] font-semibold text-sm text-center mb-2">
                    Student ID
                  </h1>
                  <input
                    type="file"
                    name="inputField"
                    className="block px-6 py-3 outline-none rounded-[15px] text-sm font-semibold text-[#7D7D7D] border border-[#ccc] h-full w-full"
                    placeholder="Attachment"
                  />
                </div>
              </div>
            </div>
          </Scrollbar>
        </div>
      </section>
    </>
  );
};

export default StudentEditProfile;
