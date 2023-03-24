import { Outlet } from "react-router-dom";
import useAuthCheck from "shared/hooks/useAuthCheck";

const Student = () => {
  const authenticated = useAuthCheck();
  console.log("authen", authenticated);
  return !authenticated ? (
    <>Checking....</>
  ) : (
    <div className="w-full min-h-full ">
      <Outlet />
    </div>
  );
};

export default Student;
