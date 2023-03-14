import { useState } from "react";

import { toast, Toaster } from "react-hot-toast";
import { Button } from "shared/components/button";
import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "shared/components/input/input";
import { usePostData } from "shared/hooks/useFetch";
import { FETCH_USER_SUCCESS } from "shared/state/userState/actionTypes";
import { useAuth } from "shared/hooks/contextApi/useAuth";

const Login = (Props) => {
  const { mutate } = usePostData("/user/login", "/user/login");
  const navigate = useNavigate();

  const { dispatch } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    mutate(data, {
      onSuccess: ({ data }) => {
        const { data: loggedInData } = data;
        toast.success("Login successfull");
        dispatch({ type: FETCH_USER_SUCCESS, payload: loggedInData?.user });

        navigate("/");
      },
      onError: (error) => {
        toast.error(`Something went wrong: ${error}`);
      },
    });

    toast.dismiss();
  };

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
              placeholder="Email"
            />
            <InputBox
              className="pb-5 mt-5"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />

            <Button
              onClick={handleLogin}
              //   icon="uil uil-sign-in-alt"
              className="p-2 text-white rounded-md bg-primaryDark"
              label="Login"
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
