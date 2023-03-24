import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { ArrowDown } from "shared/components/icons";
import { Button } from "shared/components/button";
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
    { value: "Female", label: "Female" },
  ];

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

    toast.loading("waiting for response");

    const data = {
      name: name,
      email: email,
      password: password,
      role: "student",
      phoneNumber: number,
    };

    toast.dismiss();
  };

  return (
    <>
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute top-0 flex flex-wrap items-center justify-center bg-center bg-cover phase2-wave bg-wave2">
          <div className="z-20 -mt-8 form-modal">
            <h1 className="mx-4 text-xl text-primaryDark">Welcome to Heilo!</h1>
            <div className="flex flex-col items-center my-4 mx-9 min-w-xs">
              <InputBox
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />

              <SelectBox
                placeholder="Gender"
                options={options}
                defaultValue={gender}
                className="outline-none"
                onChange={(e) => console.log(e.value)}
              />
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
                <p className="ml-1 text-xs font-semibold text-textSecondary">
                  I agree to the{" "}
                  <span className="text-primaryDark">Terms and Conditions</span>
                </p>
              </div>
              <i>{ArrowDown} </i>
              <Button
                icon="uil uil uil-user"
                onClick={handleRegister}
                // icon={ArrowDown}
                className="p-2 mt-2 text-white rounded bg-primaryLight"
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
