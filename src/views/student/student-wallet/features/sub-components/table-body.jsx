import { tableBody, tableHeader } from "demo-data";
import React from "react";
import DwnArrow from "shared/components/icons/dwn-arrow";
import UpArrow from "shared/components/icons/up-arrow";
import { Scrollbar } from "shared/components/scrollbar";
import { clx } from "shared/configs";

const Tablebody = () => {
    return (
        <div className=" w-full flex flex-col gap-[25px]">
            <div className=" flex flex-row mx-auto w-full px-[19px] bg-[#EBEBEB] rounded-full sticky top-0 z-50">
                {tableHeader?.map((element, i) => (
                    <div
                        key={i}
                        className=" w-1/4 p-2.5 border-r border-white text-[#616161] last:border-none first:text-center capitalize font-semibold "
                    >
                        <h4>{element?.label}</h4>
                    </div>
                ))}
            </div>
            <Scrollbar className="w-full h-[370px] !rounded-[30px] !pr-0">
                <div className=" flex flex-col mx-auto w-full bg-[#f8f8f8] rounded-[30px]  py-[10px] px-[19px]">
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
                                    {element?.grow ? <UpArrow /> : <DwnArrow />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Scrollbar>
        </div>
    );
};

export default Tablebody;
