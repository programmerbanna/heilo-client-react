import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUserStatus from "shared/hooks/useUserStatus";

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
    <>
      <div className="w-full min-h-full ">
        <Outlet />
      </div>
    </>
  );
};

export default Student;
