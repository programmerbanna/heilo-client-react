import { Outlet } from "react-router-dom";
import { clx } from "shared/configs";

// custom imports
import Sidebar from "shared/widgets/Dashboard/Sidebar";

const Layouts = ({ className }) => {
  return (
    <div className="max-w-[calc(1673px+253px)] mx-auto bg-primaryDark min-h-screen flex">
      <Sidebar />
      <div className={clx("py-4 pr-4 w-[1673px] min-h-ful", className)}>
        <Outlet />
        <div className="w-full min-h-full bg-white">
          This white area is just for showcasing. for developing your ui just go
          to file- src/shared/Layouts and simply comment this out.
          <br />
          <b>Note:</b>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
