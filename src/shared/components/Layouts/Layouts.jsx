import { Outlet } from "react-router-dom";

// custom imports
import Sidebar from "shared/widgets/Dashboard/Sidebar";

const Layouts = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layouts;
