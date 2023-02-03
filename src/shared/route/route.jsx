import { createBrowserRouter } from "react-router-dom";

// custom imports
import App from "App";
import { SubRoute } from "./sub-routes";
import Layouts from "shared/components/layouts/layouts";
import { Welcome } from "views/welcome";

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
        path: "/",
        element: <Layouts />,
        children: SubRoute,
      },
    ],
  },
]);

export default route;
