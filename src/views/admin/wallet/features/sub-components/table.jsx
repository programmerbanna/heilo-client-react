import { tableBody, tableHeader } from "demo-data";
import React from "react";
import DwnArrow from "shared/components/icons/dwn-arrow";
import UpArrow from "shared/components/icons/up-arrow";
import { Scrollbar } from "shared/components/scrollbar";
import { clx } from "shared/configs";

export const Table = () => {
    return (
        <div className=" w-full flex flex-col gap-3 bg-[#ebebeb] rounded-[30px] relative">
            <div className=" absolute -top-5 left-0 py-2 px-5 bg-white rounded-full">
                <span className=" font-semibold text-lg leading-7 text-textSecondary">
                    Payment history
                </span>
            </div>
            <div className=" flex flex-row mx-auto w-full sticky top-0 z-50 px-5 pt-10">
                {tableHeader?.map((element, i) => (
                    <div
                        key={i}
                        className=" w-1/4 p-2.5 border-r border-white text-[#616161] last:border-none first:text-center capitalize font-semibold "
                    >
                        <h4>{element?.label}</h4>
                    </div>
                ))}
            </div>
            <div className=" w-full px-5 pb-6">
                <Scrollbar className="w-full !h-[calc(100vh-450px)] !rounded-[30px] !pr-0">
                    <div className=" flex flex-col mx-auto w-full bg-[#fff] rounded-[30px]">
                        {tableBody?.map((element, i) => (
                            <div
                                key={i}
                                className={clx(
                                    " flex flex-row  w-full border-b-[3px] border-solid border-[#ebebeb] last:border-none"
                                )}
                            >
                                <span className="text-[#616161] w-1/4 p-2.5 text-center font-semibold border-r border-transparent">
                                    {element?.id}
                                </span>
                                <span className="text-[#616161] w-1/4 p-2.5 font-semibold border-r border-transparent">
                                    {element?.name}
                                </span>
                                <span className="text-[#616161] w-1/4 p-2.5 font-semibold border-r border-transparent">
                                    {element?.duration}
                                </span>
                                <span
                                    className={clx(
                                        " w-1/4 p-2.5 font-semibold border-r border-transparent",
                                        element?.grow
                                            ? "text-primaryLight"
                                            : "text-[#BA0B2B]"
                                    )}
                                >
                                    {element?.amount}
                                </span>
                                <div className="text-[#616161] w-1/4 p-2.5 font-semibold relative">
                                    {element?.totalbalance}
                                    <div className=" absolute top-[10px] right-5 p-[5px]">
                                        {element?.grow ? (
                                            <UpArrow />
                                        ) : (
                                            <DwnArrow />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Scrollbar>
            </div>
        </div>
    );
};
