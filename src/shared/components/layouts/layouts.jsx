import { Outlet } from "react-router-dom";

// custom imports
import { clx } from "shared/configs";
import { Sidebar } from "shared/widgets/dashboard/sidebar";

const Layouts = ({ className }) => {
  return (
    <div className="max-w-[calc(1673px+253px)] mx-auto bg-primaryDark min-h-screen flex">
      <Sidebar />
      <div className={clx("py-4 pr-4 w-[1673px] min-h-full", className)}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
