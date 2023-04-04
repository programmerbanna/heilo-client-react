import { useState } from "react";

import { toast, Toaster } from "react-hot-toast";
import { Button } from "shared/components/button";
import { Link } from "react-router-dom";
import { InputBox } from "shared/components/input/input";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "shared/redux/features/auth/authApi";
import useUserStatus from "shared/hooks/useUserRole";
import socket from "socket.config";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "shared/redux/features/socket/socketSlice";

const Login = (Props) => {
  const [email, setEmail] = useState("hasanulhaquebanna@gmail.com");
  const [password, setPassword] = useState("Example#1");

  const navigate = useNavigate();

  const userRole = useUserStatus();

  // redux events
  const { user: socketUser } = useSelector((state) => state.socket);
  const [
    userLogin,
    { isLoading: loading, isError, error, isSuccess, data: loginData },
  ] = useUserLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      console.log("login");
      toast.error("Please fill up all fields");
      return;
    }
    toast.loading("Waiting for Response");

    const data = {
      email: email,
      password: password,
    };

    userLogin(data);

    toast.dismiss();
  };

  useEffect(() => {
    if (isError) {
      const { data } = error;
      toast.error(data?.message);
    }
    if (isSuccess) {
      const { user } = loginData;
      socket.emit("addUsers", user?._id);
      socket.on("getUsers", (users) => {
        console.log(users);
      });

      // conditions of user role
      // if (user?.role === "student") {
      //   navigate("/student/dashboard");
      // } else if (user?.role === "teacher") {
      //   navigate("/teacher/dashboard");
      // } else if (user?.role === "admin") {
      //   navigate("/admin/dashboard");
      // }
    }
  }, [isSuccess, navigate, isError, error, loginData]);

  // useEffect(() => {
  //   if (userRole === "student") {
  //     navigate("/student/dashboard");
  //   } else if (userRole === "teacher") {
  //     navigate("/teacher/dashboard");
  //   } else if (userRole === "admin") {
  //     navigate("/admin/dashboard");
  //   }
  // }, [navigate, userRole]);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute top-0 flex flex-wrap items-center justify-center bg-center bg-cover phase2-wave bg-wave2">
        <div className="z-20 -mt-8 min-w-xs form-modal">
          <h1 className="mx-4 my-8 text-xl text-primaryDark">Welcome!</h1>
          <div className="flex flex-col items-center mx-9 mt-14">
            <InputBox
              className="pb-5"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email"
            />
            <InputBox
              className="pb-5 mt-5"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
            />

            <Button
              onClick={handleLogin}
              //   icon="uil uil-sign-in-alt"
              className="p-2 text-white rounded-md bg-primaryDark"
              label={loading ? "Loading...." : "Login"}
            ></Button>
            <Link
              className="cursor-pointer text-textSecondary my-7"
              to="/registration"
            >
              Create Account
            </Link>
            <p className="cursor-pointer text-textSecondary">
              Forget Password ?
            </p>
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
