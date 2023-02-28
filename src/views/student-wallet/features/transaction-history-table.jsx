import React from "react";
import { tableHeader } from "demo-data";
import Tablebody from "./sub-components/table-body";
import Mobiletablebody from "./sub-components/mobile-table-body";

const TransactionHistoryTable = () => {
    return (
        <div className=" w-full !h-[calc(100vh-100px)] md:!h-[calc(100vh-226px)] ">
            <div className="font-semibold py-4 text-[#444F55] text-xl">
                Transaction History
            </div>
            <div className=" w-full block md:hidden">
                <Mobiletablebody />
            </div>
            <div className=" w-full hidden md:block">
                <Tablebody />
            </div>
        </div>
    );
};

export default TransactionHistoryTable;
