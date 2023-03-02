import { Admin } from "views/admin";
import { Student } from "views/student";
import { Teacher } from "views/teacher";

// sub routes
import adminSubRoute from "./adminSubRoute";
import studentSubRoute from "./studentSubRoute";
import teacherSubRoute from "./teacherSubRoute";

const subRoute = [
  {
    path: "/student",
    element: <Student />,
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
