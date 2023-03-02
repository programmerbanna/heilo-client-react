import React from "react";
// import { useState } from "react";
import DwnBtnArrow from "shared/components/icons/dwn-btn-arrow";
import { clx } from "shared/configs";

export const StudentDetailsCard = ({ label, email, number }) => {
    // const [filterTable, setFilterTable] = useState("");
    return (
        <div className=" flex flex-row justify-between bg-white py-2 px-5 rounded-3xl cursor-pointer gap-1">
            <div className=" flex flex-col gap-1 w-[60%] md:w-[75%]">
                <h2 className="truncate text-base font-semibold leading-4 text-[#444f55] capitalize">
                    {label}
                </h2>
                <div className=" flex flex-row gap-2">
                    <span className=" text-sm leading-4 font-light text-[#444f55] truncate">
                        {number}
                    </span>
                    <span className=" hidden md:block text-sm leading-4 font-light text-[#444f55] truncate">
                        {email}
                    </span>
                </div>
            </div>
            <div
                className={clx(
                    " w-[35%] md:w-[25%] h-full bg-[#F4F1F1] rounded-xl relative "
                )}
            >
                <div className=" absolute top-[17px] right-[5px]">
                    <DwnBtnArrow />
                </div>
                <select
                    className={clx(
                        "w-full h-full   px-4 py-1 pr-6 outline-none text-xs font-semibold bg-transparent cursor-pointer"
                    )}
                    // onChange={(e) => setFilterTable(e?.target?.value)}
                >
                    <option className="text-xs" value="Active">
                        Active
                    </option>
                    <option className="text-xs" value="Blocked">
                        Blocked
                    </option>
                    <option className="text-xs" value="Banned">
                        Banned
                    </option>
                </select>
            </div>
        </div>
    );
};
