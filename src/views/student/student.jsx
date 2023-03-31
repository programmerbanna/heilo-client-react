import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProtectedRoute from "shared/components/protected-route/protected-route";
import useUserStatus from "shared/hooks/useUserRole";

const Student = () => {
  const userRole = useUserStatus();
  const navigate = useNavigate();
  useEffect(() => {
    if (userRole === "teacher") {
      navigate("/teacher/dashboard");
    } else if (userRole === "admin") {
      navigate("/admin/dashboard");
    }
  }, [userRole, navigate]);
  return (
    <ProtectedRoute>
      <div className="w-full min-h-full ">
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default Student;
