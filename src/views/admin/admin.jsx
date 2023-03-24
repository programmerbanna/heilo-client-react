import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProtectedRoute from "shared/components/protected-route/protected-route";
import useUserStatus from "shared/hooks/useUserStatus";

const Admin = () => {
  const userRole = useUserStatus();
  const navigate = useNavigate();
  useEffect(() => {
    if (userRole === "student") {
      navigate("/student/dashboard");
    } else if (userRole === "teacher") {
      navigate("/teacher/dashboard");
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

export default Admin;
