import { tableBody, tableHeader } from "demo-data";
import React, { useState } from "react";
import DwnArrow from "shared/components/icons/dwn-arrow";
import DwnBtnArrow from "shared/components/icons/dwn-btn-arrow";
import UpArrow from "shared/components/icons/up-arrow";
import { Scrollbar } from "shared/components/scrollbar";
import { clx } from "shared/configs";

const Mobiletablebody = () => {
    const [filterTable, setFilterTable] = useState("duration");
    return (
        <div className=" w-full flex flex-col gap-[3px]">
            <div className=" flex flex-row mx-auto w-full px-[19px] bg-[#EBEBEB] rounded-t-[30px] sticky top-0 z-50 py-2">
                {tableHeader?.slice(0, 2)?.map((element, i) => (
                    <div
                        key={i}
                        className=" w-1/3 p-2.5  text-[#616161] first:text-center "
                    >
                        <h4 className=" font-semibold capitalize text-xs">
                            {element?.label}
                        </h4>
                    </div>
                ))}
                <div className={clx("w-1/3 h-full relative")}>
                    <div className=" absolute top-[17px] right-[5px]">
                        <DwnBtnArrow />
                    </div>
                    <select
                        className={clx(
                            "w-full h-full pl-3 py-3 rounded-xl bg-white outline-none text-xs font-semibold"
                        )}
                        onChange={(e) => setFilterTable(e?.target?.value)}
                    >
                        {tableHeader?.slice(2)?.map((e, i) => (
                            <option
                                className="text-xs"
                                key={i}
                                value={e?.label}
                            >
                                {e.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <Scrollbar className="w-full h-[370px] !rounded-b-[30px] !pr-0">
                <div className=" flex flex-col mx-auto w-full bg-[#f8f8f8] rounded-b-[30px]  py-[10px] px-[19px]">
                    {tableBody?.map((element, i) => (
                        <div
                            key={i}
                            className={clx(
                                " flex flex-row justify-center w-full border-b-[3px] border-solid border-[#ebebeb] last:border-none"
                            )}
                        >
                            <div className="w-1/3 p-2.5 text-center  border-r border-transparent">
                                <span className="text-[#616161] font-semibold text-[10px]">
                                    {element?.id}
                                </span>
                            </div>
                            <div className="w-1/3 p-2.5 border-r border-transparent">
                                <span className="text-[#616161] font-semibold text-[10px]">
                                    {element?.name}
                                </span>
                            </div>
                            <div
                                className={clx(
                                    "w-1/3 p-2.5 border-r border-transparent",
                                    filterTable === "duration"
                                        ? "block"
                                        : "hidden"
                                )}
                            >
                                <span
                                    className={clx(
                                        "text-[#616161] font-semibold text-[10px]"
                                    )}
                                >
                                    {element?.duration}
                                </span>
                            </div>
                            <div
                                className={clx(
                                    "w-1/3 p-2.5 border-r border-transparent",
                                    filterTable === "amount"
                                        ? "block"
                                        : "hidden"
                                )}
                            >
                                <span
                                    className={clx(
                                        "font-semibold text-[10px]",
                                        element?.grow
                                            ? "text-primaryLight"
                                            : "text-[#BA0B2B]"
                                    )}
                                >
                                    {element?.amount}
                                </span>
                            </div>

                            <div
                                className={clx(
                                    " w-1/3 p-2.5 relative",
                                    filterTable === "total balance"
                                        ? "block"
                                        : "hidden"
                                )}
                            >
                                <span className="text-[10px] font-semibold text-[#616161]">
                                    {element?.totalbalance}
                                </span>

                                <div className=" absolute top-[15px] right-[10%] p-[5px]">
                                    {element?.grow ? (
                                        <UpArrow width={6} height={7} />
                                    ) : (
                                        <DwnArrow width={6} height={7} />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Scrollbar>
        </div>
    );
};

export default Mobiletablebody;
