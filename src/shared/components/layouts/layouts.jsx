import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// custom imports
import { clx } from "shared/configs";
import { Sidebar } from "shared/widgets/dashboard/sidebar";
import { Image } from "../image";
import userImage from "assets/img/teacher.png";
import { MobileMenuIcon } from "../icons";

const Layouts = ({ className }) => {
  const route = useLocation();
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user?.role === "student") {
  //     navigate("/student/dashboard");
  //   } else if (user?.role === "teacher") {
  //     navigate("/teacher/dashboard");
  //   } else if (user?.role !== "student" && user?.role !== "teacher") {
  //     navigate("/login");
  //   }
  // }, [state, user, navigate]);

  useEffect(() => {
    setToggleNavigation((pre) => !pre);
  }, [route?.pathname]);
  return (
    <div className="md:max-w-[calc(1673px+253px)] mx-auto md:bg-primaryDark min-h-screen flex flex-col md:flex-row relative">
      <div className="block md:hidden z-50 sticky top-0">
        <div className=" px-5 flex justify-between items-center h-[58px] bg-white shadow-md ">
          <button
            onClick={() => setToggleNavigation((pre) => !pre)}
            className="text-2xl cursor-pointer"
          >
            <MobileMenuIcon />
          </button>
          <div className=" w-8 h-8">
            <Image src={userImage} alt="user image" />
          </div>
        </div>

        <div
          className={clx(
            toggleNavigation ? "" : "-translate-x-[100%]",
            " h-screen w-full bg-primaryDark  absolute top-0 left-0  transition-all duration-200 "
          )}
        >
          <Sidebar setOpen={setToggleNavigation} />
        </div>
      </div>

      <div className=" hidden md:block">
        <Sidebar />
      </div>

      <div
        className={clx(
          "md:my-4 md:mr-4 p-5 w-full md:w-[1673px] min-h-full bg-white rounded-[30px]",
          className
        )}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
