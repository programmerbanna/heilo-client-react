import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// custom imports
import "shared/styles/globals.css";
import "shared/styles/scrollbar.css";

const App = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  // useEffect(() => {
  //   if (user?.role !== "student" && user?.role !== "teacher") {
  //     navigate("/login");
  //   }
  // }, [state, user, navigate]);
=======
  const { state } = useAuth();
  const { user } = state;

//   useEffect(() => {
//     if (user?.role !== "student" && user?.role !== "teacher") {
//       navigate("/login");
//     }
//   }, [state, user, navigate]);
>>>>>>> 41beb16239f33c250a1450e74f024f1d73da2b74
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
