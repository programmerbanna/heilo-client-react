import React from "react";
import { PaymentRequest } from "./features/payment-request";
import { Table } from "./features/table";
import { TeacherDetails } from "./features/teacher-details";

const Teacher = () => {
    return (
        <div className=" flex flex-col gap-5 md:grid md:grid-cols-12">
            <div className=" col-span-8">
                <section className=" w-full flex flex-col justify-between md:flex-row rounded-[30px]">
                    <PaymentRequest />
                </section>
                <section className="grid grid-rows-6 md:grid-cols-12 gap-16 md:gap-5 pt-10 rounded-[30px]  mt-10">
                    <Table
                        className=" bg-[#EBEBEB] border-[#EBEBEB]"
                        totalAmount="50,000"
                        title="Total Paid"
                        tableHclassName=" bg-white"
                        tableBodyclassName=" !border-white"
                    />
                    <Table
                        className=" bg-white border-[#01B489]"
                        totalAmount="12,500"
                        title="Total Due"
                    />
                </section>
            </div>
            <div className=" col-span-4 !h-[calc(100vh-72px)] bg-[#EBEBEB] rounded-[30px] p-7">
                <TeacherDetails />
            </div>
        </div>
    );
};
export default Teacher;
