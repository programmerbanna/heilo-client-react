import React from "react";
import { Teacher } from "./features/teacher";
import { Student } from "./features/student";

const Contact = () => {
    return (
        <div className=" flex flex-col gap-6">
            <Teacher />
            <Student />
        </div>
    );
};

export default Contact;
