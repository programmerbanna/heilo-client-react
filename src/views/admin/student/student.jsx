import React from "react";
import { CompletedSessions } from "./features/completed-sessions";
import { ProfileSection } from "./features/profile-section";
import { StudentDetails } from "./features/student-details";

const Card = ({ title, number, money }) => {
    return (
        <div className=" flex flex-col md:gap-3">
            <h1 className=" text-lg md:text-3xl font-light md:leading-10 text-[#01B489]">
                {title}
            </h1>
            {number && (
                <span className=" font-bold text-2xl md:text-6xl md:leading-10 text-[#7D7C7C]">
                    {number}
                </span>
            )}
            {money && (
                <span className=" font-bold text-2xl md:text-6xl md:leading-10 !text-[#01B489]">
                    Tk.{money}
                </span>
            )}
        </div>
    );
};

const Student = () => {
    return (
        <div className=" flex flex-col gap-5 md:grid md:grid-cols-12">
            <div className=" x col-span-8">
                <section className=" flex flex-col justify-between md:flex-row border-[3px] border-solid border-[#01B489] px-6 md:px-10 py-6 rounded-[30px]">
                    <ProfileSection />
                </section>
                <section className=" py-10 flex flex-col justify-between md:flex-row max-md:gap-3">
                    <Card title="TUITION AVAIL" number="41" />
                    <Card title="QUIZ APPEARED " number="25" />
                    <Card title="TOTAL MONEY SPEND " money="2550" />
                </section>
                <section className=" hidden md:block bg-[#EBEBEB] px-8 pb-8 pt-10 rounded-[30px] relative">
                    <div className=" absolute -top-5 left-0 py-2 px-5 bg-white rounded-full">
                        <span className=" font-semibold text-lg leading-7 text-textSecondary">
                            Completed Sessions
                        </span>
                    </div>
                    <CompletedSessions />
                </section>
            </div>
            <div className=" col-span-4 !h-[calc(100vh-72px)] bg-[#EBEBEB] rounded-[30px] p-7">
                <StudentDetails />
            </div>
        </div>
    );
};

export default Student;
