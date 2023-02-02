import { createBrowserRouter } from "react-router-dom";

// custom imports
import App from "App";
import Layouts from "shared/components/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Layouts /> }],
  },
]);

export default router;
