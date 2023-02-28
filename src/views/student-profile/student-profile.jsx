import React from "react";
import { Scrollbar } from "shared/components/scrollbar";
import Review from "./features/review";
import ReviewTile from "./features/review-tile";
import StudentInfoCard from "./features/student-info-card";

const StudentProfile = () => {
    return (
        <section className="grid grid-rows-1 md:grid-cols-12 gap-6 mt-3">
            <div className="md:col-span-4 ">
                <StudentInfoCard />
            </div>
            <div className="md:col-span-8 ">
                <Scrollbar className="!h-[calc(100vh-100px)]">
                    <div className="grayDiv p-4 rounded-3xl">
                        <div className="titleTab bg-[#3DDEA5] text-white">
                            Basic Information
                        </div>
                        <div className="grid grid-rows-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-6 p-4 pb-0">
                                <h1 className="font-light text[#7D7D7D] mb-1.5">
                                    Address
                                </h1>
                                <p className="text-[#7D7D7D] font-semibold">
                                    274, sher-e-bangla road, Dhaka- 1209
                                </p>
                            </div>
                            <div className="md:col-span-6 p-4 pb-0">
                                <h1 className="font-light text[#7D7D7D] mb-1.5">
                                    Gender
                                </h1>
                                <p className="text-[#7D7D7D] font-semibold">
                                    Male
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grayDiv p-4 rounded-3xl mt-4">
                        <div className="titleTab bg-[#3DDEA5] text-white">
                            Education
                        </div>
                        <div className="grid grid-rows-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-6 p-4 pb-0">
                                <h1 className="font-light text[#7D7D7D] mb-1.5">
                                    Current Institute
                                </h1>
                                <p className="text-[#7D7D7D] font-semibold">
                                    Maple Leaf International School And College
                                </p>
                            </div>
                            <div className="md:col-span-6 p-4 pb-0">
                                <h1 className="font-light text[#7D7D7D] mb-1.5">
                                    Class
                                </h1>
                                <p className="text-[#7D7D7D] font-semibold">
                                    Std- VI
                                </p>
                            </div>
                        </div>

                        <div className="grid  grid-rows-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-6 p-4 pb-0">
                                <h1 className="font-light text[#7D7D7D] mb-1.5">
                                    Medium
                                </h1>
                                <p className="text-[#7D7D7D] font-semibold">
                                    English Medium
                                </p>
                            </div>
                            <div className="md:col-span-6 p-4 pb-0">
                                <h1 className="font-light text[#7D7D7D] mb-1.5">
                                    Background
                                </h1>
                                <p className="text-[#7D7D7D] font-semibold">
                                    Science
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-4 border-[#F1F1F1] rounded-3xl mt-4 md:grid md:grid-cols-12 flex flex-col-reverse">
                        <div className="md:col-span-6 p-4 pb-0 md:border md:border-r-4 md:border-[#F1F1F1]">
                            <div className="titleTab hidden md:block bg-[#3DDEA5] text-white">
                                Reviews
                            </div>

                            <div className="py-3 pl-10">
                                <Scrollbar className="!h-[calc(100vh-490px)]">
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                                        <ReviewTile />
                                    ))}
                                </Scrollbar>
                            </div>
                        </div>

                        <div className="md:col-span-6 p-4 grid gap-10 md:pb-0">
                            <div className="titleTab block md:hidden bg-[#3DDEA5] text-white">
                                Reviews
                            </div>
                            <Review />
                        </div>
                    </div>
                </Scrollbar>
            </div>
        </section>
    );
};

export default StudentProfile;
