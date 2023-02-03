import React from "react";
import { Outlet } from "react-router-dom";

const Teacher = () => {
  return (
    <div className="w-full min-h-full bg-white">
      <Outlet />
    </div>
  );
};

export default Teacher;
