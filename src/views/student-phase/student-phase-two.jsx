import React from "react";
import StudentPhaseTwoWave from "./features/student-phase-two-wave";

const StudentPhaseTwo = () => {
    return (
        <div className="relative flex justify-center h-screen">
            <div className="absolute top-0 flex items-center justify-center w-full h-full">
                <StudentPhaseTwoWave />
            </div>
        </div>
    );
};

export default StudentPhaseTwo;
