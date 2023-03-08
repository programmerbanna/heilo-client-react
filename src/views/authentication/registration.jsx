import { useState } from "react";
import { toast } from 'react-hot-toast';
import { Toaster } from "react-hot-toast";

import { ArrowDown } from 'shared/components/icons';
import { Button } from 'shared/components/button';
import { CheckBox, InputBox, SelectBox } from "shared/components/input/input";


const Registration = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState(0);
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [conditionsAgreed, setConditionsAgreed] = useState(false);


    const options = [
        { value: "male", label: "Male" },
        { value: "Female", label: "Female" }
    ]


    const handleRegister = () => {
        // console.log(gender);
        if (
            !name ||
            !gender ||
            !email ||
            !number ||
            !password ||
            !conditionsAgreed
        ) {
            toast.error("Please fill up all fields");
            return;
        }
        if (confirmPass !== password) {
            toast.error("Password doesn't match");
            return;
        }

        toast.loading("waiting for response")

        const data = {
            name: name,
            email: email,
            password: password,
            role: "student",
            phoneNumber: number,
        };

        // const url = process.env.apiUrl + APIEndpoints.registerAPI;

        // axios
        //   .post(url, data)
        //   .then((data) => {
        //     if (data.data.status === "success") router.push("/login");
        //   })
        //   .catch(function (error) {
        //     console.log(error.response.data.error);
        //   });

    };

    return (
        <>
            
            <div className="flex justify-center items-center h-screen relative overflow-hidden">
                <div className="phase2-wave absolute top-0 flex flex-wrap justify-center items-center bg-wave2 bg-center bg-cover">
                   
                    <div className="form-modal z-20 -mt-8">

                        <h1 className="text-primaryDark text-xl mx-4">Welcome to Heilo!</h1>
                        <div className="mx-9 my-4 flex flex-col items-center min-w-xs">
                            <InputBox
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />


                            <SelectBox
                                placeholder="Gender" options={options} defaultValue={gender} className='outline-none' onChange={(e) => console.log(e.value)} />
                            <InputBox
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                            />
                            <InputBox
                               
                                onChange={(e) => setNumber(e.target.value)}
                                type="number"
                                appearance="none"
                                placeholder="Phone Number"
                            />
                            <InputBox
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                            <InputBox
                                onChange={(e) => setConfirmPass(e.target.value)}
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <div className="flex my-3">
                                <CheckBox
                                    onChange={(e) => setConditionsAgreed(e.target.checked)}
                                />
                                <p className="text-xs ml-1 font-semibold text-textSecondary">
                                    I agree to the{" "}
                                    <span className="text-primaryDark">Terms and Conditions</span>
                                </p>
                            </div>
                            <i>{ArrowDown} </i>
                            <Button icon="uil uil uil-user"
                                onClick={handleRegister}
                                // icon={ArrowDown}
                                className="mt-2 p-2 bg-primaryLight text-white rounded"
                                label="Register"
                            />
                            <Toaster position="bottom-right" reverseOrder={false} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
