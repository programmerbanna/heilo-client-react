import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "shared/hooks/contextApi/useAuth";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";

const App = () => {
  const navigate = useNavigate();

  const { state } = useAuth();
  const { user } = state;

//   useEffect(() => {
//     if (user?.role !== "student" && user?.role !== "teacher") {
//       navigate("/login");
//     }
//   }, [state, user, navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
