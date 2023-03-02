import React from "react";
import { MobileTable } from "./sub-components/mobile-table";
import { Table } from "./sub-components/table";

export const PaymentHistory = () => {
    return (
        <>
            <div className=" w-full block md:hidden">
                <MobileTable />
            </div>
            <div className=" w-full hidden md:block">
                <Table />
            </div>
        </>
    );
};
