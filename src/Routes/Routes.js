import {

    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "../App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/home" element={<App />}>
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* ... etc. */}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);