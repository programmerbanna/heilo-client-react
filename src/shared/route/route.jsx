import { createBrowserRouter } from "react-router-dom";

// custom imports
import App from "App";
import { Layouts } from "shared/components/layouts";
import subRoute from "./sub-routes";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layouts />,
        children: subRoute,
      },
    ],
  },
]);

export default route;
