import TeacherDashboard from "views/teacher/features/teacherDashboard";
import TeacherEditProfile from "views/teacher/features/teacherEditProfile";
import TeacherWallet from "views/teacher/features/teacherWallet";

const teacherSubRoute = [
  {
    path: "/teacher/dashboard",
    element: <TeacherDashboard />,
  },
  {
    path: "/teacher/edit-profile",
    element: <TeacherEditProfile />,
  },
  {
    path: "/teacher/wallet",
    element: <TeacherWallet />,
  },
];
export default teacherSubRoute;
