import React from "react";
import { Image } from "shared/components/image";
import WalletCard2 from "assets/img/wallet-card2.png";
const PackagePurchaseCard = () => {
    return (
        <div className="bg-[#F8F8F8] rounded-3xl p-6 flex flex-col items-center">
            <div className="relative w-full">
                <Image src={WalletCard2} />
                <h1 className="absolute top-1/2 left-6 -translate-y-1/2 text-white flex flex-col leading-none font-bold text-2xl">
                    00.00
                </h1>
            </div>

            <form>
                <div className="flex items-center justify-between mt-8 mb-3.5 w-full text-sm">
                    <h1 className="font-bold">Select Package</h1>
                    <select
                        defaultValue="male"
                        name="amount"
                        className="accent-[#50d71e] text-sm form-input mb-0 ml-3 w-[165px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
                    >
                        <option value="male">500 uc 500 taka</option>
                        <option value="300">300</option>
                    </select>
                </div>
                <div className="flex items-center justify-between mb-3.5 w-full text-sm">
                    <h1>New balance</h1>
                    <select
                        defaultValue="male"
                        className="text-sm form-input mb-0 ml-3 w-[150px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
                    >
                        <option value="male">500 taka</option>
                        <option value="male">200 taka</option>
                        <option value="male">100 taka</option>
                        <option value="male">700 taka</option>
                    </select>
                </div>
                <div className="flex items-center justify-between mb-3.5 w-full text-sm">
                    <h1>Oparator</h1>
                    <select
                        defaultValue="male"
                        name="operator"
                        className="text-sm form-input mb-0 ml-3 w-[100px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
                    >
                        <option value="Bkash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Rocket">Rocket</option>
                    </select>
                </div>
                <div className="flex items-center justify-between mb-3.5 w-full text-sm">
                    <h1>Transaction ID</h1>
                    <select
                        defaultValue="male"
                        className="text-sm form-input mb-0 ml-3 w-[150px] py-1 bg-[#EBEBEB] pl-5 rounded-full"
                    >
                        <option value="male">053075047</option>
                        <option value="male">8080808</option>
                        <option value="male">686868</option>
                        <option value="male">36287638</option>
                    </select>
                </div>
                <div className="mb-3.5 w-full text-xs px-3">
                    <h1>Notes-</h1>
                    <p className="my-1 px-2">
                        1. First{" "}
                        <span className="font-semibold">send the money to</span>
                        - 018*********, available for all kinds of MFS.
                    </p>
                    <p className="px-2">
                        2. Once sent, just{" "}
                        <span className="font-semibold">put in the TRXID.</span>
                        That’s enough for today, see you on another puchase!
                    </p>
                </div>
                <button
                    type="submit"
                    className="bg-primaryLight w-fit font-bold py-2 px-6 mr-auto text-[23px] leading-[34px] rounded-[30px] float-right"
                >
                    Parchase
                </button>
            </form>
        </div>
    );
};

export default PackagePurchaseCard;
