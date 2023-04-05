import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// custom imports
import Logo from "assets/img/logo-white.png";
import { Close, LogoutIcon } from "shared/components/icons";
import { Image } from "shared/components/image";

import { studentMenus, teacherMenus } from "shared/configs";
import useUserStatus from "shared/hooks/useUserRole";
import { DashboardMenuItem } from "../subComponents";

// =============================== Sidebar Menu ======================//
const Sidebar = ({ setOpen }) => {
  const userRole = useUserStatus();
  const navigate = useNavigate();
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  // redux events
  const { user } = useSelector((state) => state?.auth);

  const onClick = () => {
    // socket.emit("userRemove", loggedInUserId);
    localStorage.removeItem("auth");
    navigate("/login");
  };

  useEffect(() => {
    // socket.on("getUsers", (user) => {
    //   console.log(user);
    // });
  }, []);

  useEffect(() => {
    if (user && user?._id) {
      setLoggedInUserId(user?._id);
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col w-full md:w-[253px] h-full">
        <div className=" pl-[21px] md:pl-0 w-full flex justify-between md:justify-center items-center mt-12 mb-[15%] md:mb-[30%]">
          <Link to="/">
            <div className="w-[96px] h-[46.75px]">
              <Image src={Logo} />
            </div>
          </Link>
          <div className=" block md:hidden pr-[21px] z-40 text-2xl cursor-pointer">
            <button onClick={() => setOpen((pre) => !pre)}>
              <Close className=" w-8 h-8 text-white" />
            </button>
          </div>
        </div>
        <nav className="pl-[21px] h-full w-full gap-1 flex flex-col justify-center ">
          <ul className="flex flex-col ">
            {userRole === "student"
              ? studentMenus.map((element, i) => (
                  <DashboardMenuItem key={i} {...element} />
                ))
              : userRole === "teacher"
              ? teacherMenus.map((element, i) => (
                  <DashboardMenuItem key={i} {...element} />
                ))
              : null}
          </ul>
        </nav>
        <div className="pl-[21px] md:pl-0  w-full h-full flex md:justify-center items-end">
          <button className="flex items-center mr-5" onClick={onClick}>
            <div className="flex items-center h-20 px-3 py-5 bg-white rounded-tl-full rounded-tr-full">
              <LogoutIcon width={26} className="text-primaryDark" />
            </div>
            <h1 className="ml-2.5 text-white">Log Out</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
