import React from "react";
import { PaymentHistory } from "./features/payment-history";
import { PurchaseRequestStudent } from "./features/purchase-request-student";
import { Withdraw } from "./features/withdraw";

const Wallet = () => {
    return (
        <div className=" flex flex-col-reverse md:grid md:grid-cols-12 gap-8">
            <section className=" md:col-span-8">
                <div className=" flex flex-col gap-10">
                    <PurchaseRequestStudent />
                    <PaymentHistory />
                </div>
            </section>
            <section className=" md:col-span-4">
                <div>
                    <Withdraw />
                </div>
            </section>
        </div>
    );
};
export default Wallet;
