import TeacherDashboard from "views/teacher/features/teacherDashboard";
import TeacherProfile from "views/teacher/features/teacherProfile";
import TeacherEditProfile from "views/teacher/features/teacherEditProfile";
import TeacherWallet from "views/teacher/features/teacherWallet";
import { TeacherInbox } from "views/teacher/features/teacherInbox";


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
    path: "/teacher/profile",
    element: <TeacherProfile />,
  },
  {
    path: "/teacher/wallet",
    element: <TeacherWallet />,
  },
  {
    path: "/teacher/inbox",
    element: <TeacherInbox />,
  },
 
 
];
export default teacherSubRoute;
