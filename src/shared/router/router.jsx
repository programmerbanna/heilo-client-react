import { createBrowserRouter } from "react-router-dom";

// custom imports
import App from "App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

export default router;
