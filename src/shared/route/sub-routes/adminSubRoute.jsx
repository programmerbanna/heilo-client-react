import AdminDashboard from "views/admin/features/adminDashboard";
import AdminEditProfile from "views/admin/features/adminEditProfile";

const adminSubRoute = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/edit-profile",
    element: <AdminEditProfile />,
  },
];
export default adminSubRoute;
