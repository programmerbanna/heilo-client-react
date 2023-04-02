import { Outlet } from "react-router-dom";
// import useAuthCheck from "shared/hooks/useAuthCheck";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";

const App = () => {
  // const isAuthChecking = useAuthCheck();
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
