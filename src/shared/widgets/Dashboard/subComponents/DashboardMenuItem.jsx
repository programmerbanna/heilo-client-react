import React from "react";
import { Link } from "react-router-dom";

const DashboardMenuItem = ({ title, path, icon }) => {
  return (
    <li className="relative dashboard-menu-item-active">
      <div className="bg-primaryDark w-[20px] h-[20px] absolute top-[-20px] right-0 rounded-br-full" />
      <Link
        className="flex items-center p-3 rounded-tl-full rounded-bl-full bg-whitepl-7 group"
        href={path}
      >
        <div className="mr-5 text-white group-hover:text-black/80">{icon}</div>
        <p className="font-medium text-white capitalize group-hover:text-black/80">
          {title}
        </p>
      </Link>
      <div className="bg-primaryDark w-[20px] h-[20px] absolute bottom-[-20px] right-0 z-10 rounded-tr-full" />
    </li>
  );
};

export default DashboardMenuItem;
