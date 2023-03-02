import { createBrowserRouter } from "react-router-dom";

// custom imports
import App from "App";
import { SubRoute } from "./sub-routes";
import Layouts from "shared/components/layouts/layouts";
import { Welcome } from "views/welcome";
import { StudentPhaseOne, StudentPhaseTwo } from "views/student/student-phase";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/student/student-phase-one",
        element: <StudentPhaseOne />,
      },
      {
        path: "/student/student-phase-two",
        element: <StudentPhaseTwo />,
      },
      {
        path: "/",
        element: <Layouts />,
        children: SubRoute,
      },
    ],
  },
]);

export default route;
