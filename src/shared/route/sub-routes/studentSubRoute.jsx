import { StudentDashboard } from "views/student/student-dashbord";
import { StudentInbox } from "views/student/student-inbox";
import { StudentProfile } from "views/student/student-profile";
import { StudentWallet } from "views/student/student-wallet";

const studentSubRoute = [
    {
        path: "/student/dashboard",
        element: <StudentDashboard />,
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
        path: "/student/inbox",
        element: <StudentInbox />,
    },
];
export default studentSubRoute;
