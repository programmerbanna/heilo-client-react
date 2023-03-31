import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProtectedRoute from "shared/components/protected-route/protected-route";
import useUserStatus from "shared/hooks/useUserRole";

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
    <ProtectedRoute>
      <div className="w-full min-h-full bg-white">
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default Teacher;
