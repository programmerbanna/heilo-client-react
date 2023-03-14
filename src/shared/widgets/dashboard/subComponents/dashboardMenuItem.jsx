import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { clx } from "shared/configs";

const DashboardMenuItem = ({ label, path, icon }) => {
  const currentPath = useLocation();
  return (
    <li>
      <NavLink to={path}>
        <div
          className={clx(
            " w-full px-[31px] py-3 flex flex-row items-center gap-7",
            path === currentPath?.pathname
              ? "before:content-[''] before:p-2 before:absolute before:-top-4 before:right-0 before:w-1 before:h-1 before:bg-primaryDark before:rounded-br-full before:shadow-[6px_5px_0_5px_rgba(255,255,255)]   after:p-2 after:absolute after:-bottom-4 after:right-0 after:w-1 after:h-1 after:bg-primaryDark after:rounded-tr-full after:shadow-[6px_-3px_0_3px_rgba(255,255,255)] bg-white  rounded-l-full relative"
              : "text-white hover:text-black"
          )}
        >
          {icon}
          <span> {label}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default DashboardMenuItem;
