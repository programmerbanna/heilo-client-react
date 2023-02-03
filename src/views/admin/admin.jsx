import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="w-full min-h-full bg-white">
      <Outlet />
    </div>
  );
};

export default Admin;
