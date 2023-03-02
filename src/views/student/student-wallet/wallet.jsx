import React from "react";
import WalletCard1 from "assets/img/wallet-card1.png";
import { Image } from "shared/components/image";
import TransactionHistoryTable from "./features/transaction-history-table";
import PackagePurchaseCard from "./features/package-purchase-card";
const wallet = () => {
    return (
        <section className=" flex justify-between flex-row gap-6 mt-3">
            <div className=" w-full">
                <div className="relative w-full md:w-[260px]">
                    <Image src={WalletCard1} />
                    <h1 className="absolute top-1/2 left-9 -translate-y-1/2 text-white flex flex-col leading-none font-bold text-3xl">
                        500<span>US</span>
                    </h1>
                </div>
                <TransactionHistoryTable />
            </div>
            <div className=" md:block hidden w-[452px]">
                <PackagePurchaseCard />
            </div>
        </section>
    );
};

export default wallet;
