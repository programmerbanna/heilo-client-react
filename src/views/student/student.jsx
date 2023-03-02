import { Outlet } from "react-router-dom";

const Student = () => {
  return (
    <div className="w-full min-h-full ">
      <Outlet />
    </div>
  );
};

export default Student;
