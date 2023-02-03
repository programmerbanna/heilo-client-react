import { Admin } from "views/admin";
import { Teacher } from "views/teacher";
import adminSubRoute from "./adminSubRoute";
import studentSubRoute from "./studentSubRoute";
import teacherSubRoute from "./teacherSubRoute";

const subRoute = [
  {
    path: "/student",
    children: studentSubRoute,
  },
  {
    path: "/teacher",
    element: <Teacher />,
    children: teacherSubRoute,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: adminSubRoute,
  },
];
export default subRoute;
