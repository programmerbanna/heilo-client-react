import { StudentDashboard } from "views/student/student-dashbord";
import { StudentEditProfile } from "views/student/student-edit-profile";
import { StudentInbox } from "views/student/student-inbox";
import { StudentOnDemand } from "views/student/student-on-demand";
import { StudentProfile } from "views/student/student-profile";
import { StudentWallet } from "views/student/student-wallet";

const studentSubRoute = [
  {
    path: "/student/dashboard",
    element: <StudentDashboard />,
  },
  {
    path: "/student/on-demand",
    element: <StudentOnDemand />,
  },
  {
    path: "/student/wallet",
    element: <StudentWallet />,
  },
  {
    path: "/student/profile",
    element: <StudentProfile />,
  },
  {
    path: "/student/edit/profile",
    element: <StudentEditProfile />,
  },
  {
    path: "/student/inbox",
    element: <StudentInbox />,
  },
];
export default studentSubRoute;
