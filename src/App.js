import { Outlet } from "react-router-dom";

import useAuthCheck from "shared/hooks/useAuthCheck";
import { useEffect } from "react";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";

const App = () => {
  const isAuthChecking = useAuthCheck();

  useEffect(() => {
    // socket.on("getUsers", (user) => {
    //   alert("user connected", user);
    // });
  }, []);

  return !isAuthChecking ? null : (
    <>
      <Outlet />
    </>
  );
};

export default App;
