import React from "react";

import { Scrollbar } from "shared/components/scrollbar";
import { PaymentRequestCard } from "./sub-components/payment-request-card";

export const PaymentRequest = () => {
    return (
        <div className=" flex flex-col w-full gap-2">
            <span className=" font-semibold text-xl leading-7 text-[#01b489]">
                Payment Request
            </span>
            <Scrollbar className="w-full 2xl:!h-[calc(100vh-541px)] !h-[calc(100vh-448px)] !pr-[10px]">
                <div className=" flex flex-col w-full gap-3">
                    {[0, 1, 2, 3].map(() => (
                        <PaymentRequestCard />
                    ))}
                </div>
            </Scrollbar>
        </div>
    );
};
