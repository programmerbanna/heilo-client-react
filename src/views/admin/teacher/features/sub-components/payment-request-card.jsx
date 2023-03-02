import React from "react";
import { Image } from "shared/components/image";
import user from "assets/img/teacher.png";
import { clx } from "shared/configs";
import DwnBtnArrow from "shared/components/icons/dwn-btn-arrow";
export const PaymentRequestCard = () => {
    return (
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-[4%] md:justify-between bg-[#D2F9EB] p-4 rounded-[20px]">
            <Image className=" w-[50px] h-[50px]" src={user} alt="user image" />
            <div className="w-full max-md:gap-[15%] md:gap-[10%] flex flex-row max-md:justify-between">
                <div className=" w-full flex flex-col">
                    <h3 className=" font-bold text-sm md:text-base leading-6 text-[#444f55]">
                        Ruhul Amin Tusar
                    </h3>
                    <span className=" font-normal text-sm md:text-base leading-6 text-[#444f55]">
                        11/08/2021 12:30 pm
                    </span>
                </div>
                <div className=" w-full flex flex-col">
                    <span className=" font-bold text-sm md:text-base leading-6 text-[#444f55]">
                        Bkash
                    </span>
                    <span className=" font-normal text-sm md:text-base leading-6 text-[#444f55]">
                        01824696900
                    </span>
                </div>
            </div>

            <div className=" w-full max-md:gap-[15%] flex flex-row md:gap-[10%]  max-md:justify-between">
                <div className="w-full flex flex-col">
                    <span>
                        Requested UC:
                        <small>500</small>
                    </span>
                    <span>
                        New UC Balance:
                        <small>510</small>
                    </span>
                </div>
                <div className="w-full">
                    <div
                        className={clx(
                            "text-sm md:text-base font-semibold leading-6 text-[#444f55] bg-white rounded-3xl p-0 w-[140px] h-[43px] border border-solid border-[#01b489] relative "
                        )}
                    >
                        <div className=" absolute top-[17px] right-[15px]">
                            <DwnBtnArrow className=" text-[#01b489]" />
                        </div>
                        <select
                            className={clx(
                                "w-full h-full   px-4 py-1 pr-6 outline-none text-xs font-semibold bg-transparent cursor-pointer"
                            )}
                            // onChange={(e) => setFilterTable(e?.target?.value)}
                        >
                            <option className="text-xs" value="Pending">
                                Pending
                            </option>
                            <option className="text-xs" value="Approve">
                                Approve
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
