import { Outlet } from "react-router-dom";
import useAuthCheck from "shared/hooks/useAuthCheck";
import { useEffect } from "react";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";
import socket from "socket.config";

const App = () => {
  socket.emit("logout", (user) => {
    console.log("logged out", user);
  });

  const isAuthChecking = useAuthCheck();
  return !isAuthChecking ? null : (
    <>
      <Outlet />
    </>
  );
};

export default App;
