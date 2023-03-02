import React from "react";

export const Withdraw = () => {
    return (
        <div className=" rounded-lg md:rounded-l-[30px] bg-[#ebebeb] p-6">
            <div className=" rounded-lg md:rounded-l-[30px] bg-white p-4 md:p-8">
                <div className=" flex flex-row justify-between w-full bg-[#1be59d] rounded-lg md:rounded-[30px] p-9 md:gap-[21px]">
                    <span className=" max-md:w-36 text-white font-bold text-lg md:text-2xl leading-9">
                        Enter amount to withdraw
                    </span>
                    <span className=" font-bold text-lg md:text-[33px] leading-[50px] text-white">
                        00.00
                    </span>
                </div>
                <div className=" flex flex-col gap-3 md:gap-5 mt-5">
                    <div className=" flex flex-row items-center justify-between">
                        <span className=" font-bold text-base md:text-lg leading-5">
                            Total Balance
                        </span>
                        <div className="w-[168px] h-[43px] rounded-full bg-[#ebebeb]"></div>
                    </div>
                    <div className=" flex flex-row items-center justify-between">
                        <span className=" font-light text-base md:text-lg leading-5">
                            Remaining balance
                        </span>
                        <div className="w-[168px] h-[43px] rounded-full bg-[#ebebeb]"></div>
                    </div>
                    <button className=" bg-[#1be59d] font-bold text-base md:text-lg leading-7 text-black py-2 px-5 border-2 border-solid border-black rounded-full">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};
