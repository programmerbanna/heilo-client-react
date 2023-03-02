import React from "react";
import StudentPhaseOneWave from "./features/student-phase-one-wave";

const StudentPhaseOne = () => {
    return (
        <div className="relative flex justify-center h-screen">
            <div className="absolute top-0 flex items-center justify-center w-full h-[90%]">
                <StudentPhaseOneWave />
            </div>
        </div>
    );
};

export default StudentPhaseOne;
