import { createBrowserRouter } from "react-router-dom";

// custom imports
import App from "App";
import Layouts from "shared/components/Layouts";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layouts />,
        children: [
          {
            path: "/wll be added",
            element: "will be added",
          },
        ],
      },
    ],
  },
]);

export default route;
