import React from "react";
import { Image } from "shared/components/image";
import { Scrollbar } from "shared/components/scrollbar";
import user from "assets/img/teacher.png";
const UpcomingSession = () => {
    return (
        <div className="mb-3 border-2 border-[#C4C4C4] cursor-pointer hover:bg-gray-200 p-1 rounded-2xl">
            <div className="flex items-center text-textSecondary font-semibold text-[10px] justify-between">
                <div className="ml-1">
                    <Image src={user} />
                </div>
                <h1 className="text-primaryDark mx-2">Ruhul Amin Tushar</h1>
                <div className="flex bg-[#B4F4DD] p-3 rounded-xl">
                    <h1 className="mr-2">Topic- Mathematics</h1>
                    <h1>11-03-2022 (4pm- 6:30 pm)</h1>
                </div>
            </div>
        </div>
    );
};

const StudentTutionCompleted = () => {
    return (
        <>
            <div className=" absolute -top-4 left-0">
                <h1 className="text-textSecondary bg-white titleTab font-semibold  py-2 px-4">
                   Upcoming Session
                </h1>
            </div>
            <div className=" w-full h-full">
                <Scrollbar>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                        <UpcomingSession />
                    ))}
                </Scrollbar>
            </div>
        </>
    );
};

export default StudentTutionCompleted;
