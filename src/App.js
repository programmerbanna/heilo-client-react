import { Outlet } from "react-router-dom";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
