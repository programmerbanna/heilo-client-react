import { adminstudentinfo } from "demo-data";
import React, { useState } from "react";
import { SearchIcon } from "shared/components/icons";
import { Scrollbar } from "shared/components/scrollbar";
import { TeacherDetailsCard } from "./sub-components/teacher-details-card";

export const TeacherDetails = () => {
    const [userFilter, setUserFilter] = useState("");
    const SearchHandler = (e) => {
        setUserFilter(e?.target?.value);
    };
    return (
        <section className=" h-full flex flex-col gap-5">
            <div className="w-full px-5 bg-[#fff] h-[45px] rounded-[30px] flex justify-center items-center">
                <input
                    type="text"
                    className=" w-full h-full bg-transparent outline-none border-none"
                    onChange={SearchHandler}
                    placeholder="Enter Phone Number"
                />
                <div className=" w-[27px] h-[27px]">
                    <SearchIcon className=" text-[#616161] w-full h-full" />
                </div>
            </div>

            <Scrollbar className="w-full !h-[calc(100vh-200px)] pt-[10px]">
                <div className="w-full h-full flex flex-col gap-2">
                    {adminstudentinfo
                        ?.filter(
                            (e) =>
                                e?.label
                                    ?.toLowerCase()
                                    ?.includes(userFilter?.toLowerCase()) ||
                                e?.email
                                    ?.toLowerCase()
                                    ?.includes(userFilter?.toLowerCase()) ||
                                e?.number
                                    ?.toLowerCase()
                                    ?.includes(userFilter?.toLowerCase())
                        )
                        ?.map((element, id) => (
                            <TeacherDetailsCard key={id} {...element} />
                        ))}
                </div>
            </Scrollbar>
        </section>
    );
};
