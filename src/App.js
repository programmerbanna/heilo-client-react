import { Outlet } from "react-router-dom";
import useAuthCheck from "shared/hooks/useAuthCheck";
import { io } from "socket.io-client";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";
import { useEffect, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // setSocket(io("ws://localhost:5000"));
  }, []);

  useEffect(() => {
    socket?.on("welcome", (msg) => {
      alert(msg);
    });
  }, [socket]);
  const isAuthChecking = useAuthCheck();
  return !isAuthChecking ? null : (
    <>
      <Outlet />
    </>
  );
};

export default App;
