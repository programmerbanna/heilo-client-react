import React from "react";
import { Scrollbar } from "shared/components/scrollbar";
import { PurchaseRequestStudentCard } from "./sub-components/purchase-request-student-card";

export const PurchaseRequestStudent = () => {
    return (
        <div className=" flex flex-col md:flex-row gap-8">
            <div className=" flex flex-row max-md:w-full md:flex-col gap-8">
                <div className="max-md:w-full py-5 px-10 gap-2 border border-solid border-[#d7d7d7] rounded-[30px] flex flex-col justify-start">
                    <span className=" font-light leading-9 text-base md:text-2xl text-[#c4c4c4]">
                        NET PROFIT
                    </span>
                    <span className=" text-xl md:text-5xl font-bold text-[#c1126b]">
                        $ 1511
                    </span>
                </div>
                <div className="max-md:w-full py-5 px-10 gap-2 border border-solid border-[#d7d7d7] rounded-[30px] flex flex-col justify-start">
                    <span className=" font-light leading-9 text-base  md:text-2xl text-[#c4c4c4]">
                        GROSS PROFIT
                    </span>
                    <span className=" text-xl md:text-5xl font-bold text-[#01B489]">
                        $ 2511
                    </span>
                </div>
            </div>
            <div className=" flex flex-col md:w-[65%] gap-2">
                <span className=" font-semibold text-xl leading-7 text-[#01b489]">
                    Purchase Request (Student)
                </span>
                <Scrollbar className="w-full 2xl:!h-[calc(100vh-500px)] !h-[calc(100vh-448px)] !pr-0">
                    <div className=" flex flex-col w-full gap-5">
                        {[0, 1, 2, 3].map(() => (
                            <PurchaseRequestStudentCard />
                        ))}
                    </div>
                </Scrollbar>
            </div>
        </div>
    );
};
