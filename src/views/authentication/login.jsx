// import axios from "axios";
// import { signIn } from "next-auth/react";
// import Head from "next/head";

import { useState } from "react";


import { toast ,Toaster} from "react-hot-toast";
import { Button } from 'shared/components/button';
import { Link } from 'react-router-dom';
import { InputBox } from "shared/components/input/input";

// const Props = {};

const Login = (Props) => {
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

        // const res = await signIn("credentials", { ...data, redirect: false });
        // console.log(res?.status);
        toast.dismiss();

        //     if (res?.status !== 200) {
        //       toast.error("Invalid email or password");
        //       return;
        //     } else {
        //       toast.success("Login Successful");
        //       router.push("/student/dashboard");
        //     }
    };

    return (

        <div className="flex justify-center items-center h-screen relative overflow-hidden">
            <div className="phase2-wave absolute top-0 flex flex-wrap justify-center items-center bg-wave2  bg-center bg-cover">


                <div className="min-w-xs form-modal z-20 -mt-8">
                    {/* <h1 className="text-primaryDark font-semibold text-2xl text-right mx-2">
              x
            </h1> */}
                    <h1 className="text-primaryDark text-xl mx-4 my-8">Welcome!</h1>
                    <div className="mx-9 mt-14 flex flex-col items-center">
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

                        <Button onClick={handleLogin}
                            icon="uil uil-sign-in-alt" className="p-2   rounded-md bg-primaryDark text-white"
                            label="Login" >

                        </Button>
                        <Link
                            className="text-textSecondary cursor-pointer my-7"
                            to="/registration"
                        >
                            Create Account
                        </Link>
                        <p className="text-textSecondary cursor-pointer">
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
