import { Contact } from "views/admin/contact";
import AdminDashboard from "views/admin/features/adminDashboard";
import AdminEditProfile from "views/admin/features/adminEditProfile";
import { Student } from "views/admin/student";
import { Wallet } from "views/admin/wallet";
import { Teacher } from "views/admin/teacher";

const adminSubRoute = [
    {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
    },
    {
        path: "/admin/edit-profile",
        element: <AdminEditProfile />,
    },
    {
        path: "/admin/teacher",
        element: <Teacher />,
    },
    {
        path: "/admin/student",
        element: <Student />,
    },
    {
        path: "/admin/wallet",
        element: <Wallet />,
    },
    {
        path: "/admin/contact",
        element: <Contact />,
    },
];
export default adminSubRoute;
