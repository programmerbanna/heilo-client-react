import { adminTeacherTableBody, adminTeachertableHeader } from "demo-data";
import React from "react";
import { Scrollbar } from "shared/components/scrollbar";
import { clx } from "shared/configs";

export const Table = ({
    className,
    totalAmount,
    title,
    tableHclassName,
    tableBodyclassName,
}) => {
    return (
        <div
            className={clx(
                className,
                " row-span-6 md:col-span-6 relative border-2 border-solid px-4 pt-10 rounded-[30px]"
            )}
        >
            <div className=" absolute -top-12 left-0 w-full flex justify-center">
                <div className=" py-2 px-5 bg-[#01B489] rounded-2xl">
                    <div className=" flex justify-center items-center gap-3">
                        <span className=" font-medium text-xl leading-7 text-white">
                            {title}
                        </span>
                        <input
                            className=" bg-transparent !cursor-pointer outline-none border-none w-[120px]"
                            type="date"
                        />
                    </div>
                    <span className=" font-semibold text-lg md:text-[33px] leading-7 md:leading-10 text-white">
                        Tk. {totalAmount}
                    </span>
                </div>
            </div>

            <div>
                <div
                    className={clx(
                        tableHclassName,
                        " flex flex-row mx-auto w-full sticky top-0 my-5 rounded-[30px] py-1.5"
                    )}
                >
                    {adminTeachertableHeader?.map((element, i) => (
                        <div
                            key={i}
                            className=" w-1/4 p-1.5 border-r border-[#B9B9B9] text-[#616161] last:border-none first:text-center capitalize font-semibold "
                        >
                            <div className=" w-full flex justify-center items-center">
                                <span className=" font-semibold text-sm leading-5 text-[#616161]">
                                    {element?.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" w-full pb-6">
                    <Scrollbar className="w-full !h-[calc(100vh-556px)] !pr-0">
                        <div className=" flex flex-col w-full">
                            {adminTeacherTableBody?.map((element, i) => (
                                <div
                                    key={i}
                                    className={clx(
                                        " flex flex-row  w-full border-b-[3px] border-solid  last:border-none",
                                        tableBodyclassName
                                    )}
                                >
                                    <span className="text-[#616161] w-1/4 p-2.5 text-center font-semibold text-sm leading-5 truncate">
                                        {element?.id}
                                    </span>
                                    <span className="text-[#616161] w-1/4 p-2.5 font-semibold text-sm leading-5 truncate">
                                        {element?.name}
                                    </span>
                                    <span className="text-[#616161] w-1/4 p-2.5 font-semibold text-sm leading-5 truncate">
                                        {element?.duration}
                                    </span>
                                    <span
                                        className={clx(
                                            " w-1/4 p-2.5 font-semibold text-[#616161] text-sm leading-5 truncate"
                                        )}
                                    >
                                        {element?.amount}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Scrollbar>
                </div>
            </div>
        </div>
    );
};
