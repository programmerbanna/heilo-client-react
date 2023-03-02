import React from "react";
import { Image } from "shared/components/image";
import user from "assets/img/teacher.png";
export const PurchaseRequestStudentCard = () => {
    return (
        <div className=" flex flex-col md:flex-row gap-3 md:justify-between md:gap-0 bg-[#D2F9EB] p-4 rounded-[20px]">
            <div className="gap-3 flex flex-col md:flex-row max-md:justify-between">
                <Image
                    className=" w-[50px] h-[50px]"
                    src={user}
                    alt="user image"
                />
                <div className=" flex flex-row md:flex-col max-md:justify-between md:gap-6">
                    <div className=" flex flex-col">
                        <h3 className=" font-bold text-sm md:text-base leading-6 text-[#444f55]">
                            Ruhul Amin Tusar
                        </h3>
                        <span className=" font-normal text-sm md:text-base leading-6 text-[#444f55]">
                            11/08/2021 12:30 pm
                        </span>
                    </div>
                    <div className=" flex flex-col">
                        <h3 className=" font-bold text-sm md:text-base leading-6 text-[#444f55]">
                            Transaction ID
                        </h3>
                        <span className=" font-normal text-sm md:text-base leading-6 text-[#444f55]">
                            sdbefyg34hbf3
                        </span>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row md:flex-col max-md:justify-between md:gap-6">
                <div className=" flex flex-col">
                    <span className=" font-bold text-sm md:text-base leading-6 text-[#444f55]">
                        Bkash
                    </span>
                    <span className=" font-normal text-sm md:text-base leading-6 text-[#444f55]">
                        01824696900
                    </span>
                </div>
                <div className=" flex flex-col">
                    <span className=" font-bold text-sm md:text-base leading-6 text-[#444f55]">
                        Amount
                    </span>
                    <span className=" font-normal text-sm md:text-base leading-6 text-[#444f55]">
                        500 Taka
                    </span>
                </div>
            </div>
            <div className=" flex flex-row md:flex-col justify-between">
                <div className=" flex flex-col">
                    <span>
                        Requested UC:
                        <small>500</small>
                    </span>
                    <span>
                        New UC Balance:
                        <small>510</small>
                    </span>
                </div>
                <button className=" text-sm md:text-base font-semibold leading-6 text-[#444f55] bg-white rounded-3xl p-0 w-[140px] h-[43px] border-[3px] border-solid border-[#01b489]">
                    Approve
                </button>
            </div>
        </div>
    );
};
