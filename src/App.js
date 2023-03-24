import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";

const App = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user?.role !== "student" && user?.role !== "teacher") {
  //     navigate("/login");
  //   }
  // }, [state, user, navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
