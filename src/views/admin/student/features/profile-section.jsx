import React from "react";
import { Image } from "shared/components/image";
import user from "assets/img/teacher.png";
const Card = ({ title, label }) => {
    return (
        <div className=" border border-solid border-[#e0e0e0] py-1 px-5 flex flex-col gap-1 rounded-2xl">
            <span className=" font-light text-sm leading-5 text-[#01B489]">
                {title}
            </span>
            <span className=" font-semibold text-sm leading-5 text-[#7d7d7d]">
                {label}
            </span>
        </div>
    );
};
export const ProfileSection = () => {
    return (
        <>
            <div className=" flex flex-col md:flex-row gap-6 md:gap-10">
                <div className=" w-[134px] h-fit rounded-full border-[6px] border-solid border-[#01B489] overflow-hidden">
                    <Image
                        className="object-cover"
                        src={user}
                        alt="user image"
                    />
                </div>
                <div className=" flex flex-col gap-3 md:gap-7">
                    <div className=" flex flex-col gap-1">
                        <h4 className=" font-semibold text-lg leading-7 text-[#747474]">
                            Zarin Tajnim
                        </h4>
                        <span className=" font-light text-sm leading-5 text-[#747474]">
                            Maple Leaf International School and College
                        </span>
                    </div>
                    <div className=" flex flex-col gap-1">
                        <span className=" font-light text-sm leading-5 text-[#01B489]">
                            Address
                        </span>
                        <span className=" font-semibold text-sm leading-5 text-[#7d7d7d]">
                            274, sher-e-bangla road, Dhaka- 1209
                        </span>
                    </div>
                    <div className=" flex flex-row gap-7">
                        <div className=" flex flex-col gap-1">
                            <span className=" font-light text-sm leading-5 text-[#01B489]">
                                Gender
                            </span>
                            <span className=" font-semibold text-sm leading-5 text-[#7d7d7d]">
                                male
                            </span>
                        </div>
                        <div className=" flex flex-col gap-1">
                            <span className=" font-light text-sm leading-5 text-[#01B489]">
                                Join Date
                            </span>
                            <span className=" font-semibold text-sm leading-5 text-[#7d7d7d]">
                                11/09/2020
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" max-md:mt-4 flex flex-col gap-4 md:gap-8">
                <Card title="Email" label="sakib.abdullah@gmail.com" />
                <Card title="Contact Number" label="01765646564" />
                <Card title="Medium" label="English Medium" />
            </div>
        </>
    );
};
