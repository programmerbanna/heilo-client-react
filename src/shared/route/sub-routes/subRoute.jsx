import adminSubRoute from "./adminSubRoute";
import studentSubRoute from "./studentSubRoute";
import teacherSubRoute from "./teacherSubRoute";

const subRoute = [
  {
    path: "/",
    children: studentSubRoute,
  },
  {
    path: "/",
    children: teacherSubRoute,
  },
  {
    path: "/",
    children: adminSubRoute,
  },
];
export default subRoute;
