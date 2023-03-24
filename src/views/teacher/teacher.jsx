import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUserStatus from "shared/hooks/useUserStatus";

const Teacher = () => {
  const userRole = useUserStatus();
  const navigate = useNavigate();
  useEffect(() => {
    if (userRole === "student") {
      navigate("/student/dashboard");
    } else if (userRole === "admin") {
      navigate("/admin/dashboard");
    }
  }, [userRole, navigate]);
  return (
    <div className="w-full min-h-full bg-white">
      <Outlet />
    </div>
  );
};

export default Teacher;
