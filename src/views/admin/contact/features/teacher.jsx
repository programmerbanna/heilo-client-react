import React, { useState } from "react";
import user from "assets/img/teacher.png";
import { SearchIcon } from "shared/components/icons";
import { Scrollbar } from "shared/components/scrollbar";
import { chatUser } from "demo-data";
import { UserCard } from "./user-card";
import { UserRightComponents } from "./user-right-components";
export const Teacher = () => {
    const [userFilter, setUserFilter] = useState("");
    const SearchHandler = (e) => {
        setUserFilter(e?.target?.value);
    };
    return (
        <section className=" w-full bg-[#ebebeb] p-[23px] rounded-[30px]">
            <span className="titleTab md:hidden block bg-[#3DDEA5] text-white">
                Teacher
            </span>
            <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-16">
                <div className=" md:col-span-7">
                    <div className=" flex flex-col-reverse md:flex-row justify-between gap-3">
                        <div className=" flex flex-row md:flex-col justify-between md:justify-start gap-2 mb-4">
                            <span className="titleTab hidden md:block bg-[#3DDEA5] text-white">
                                Teacher
                            </span>
                            <span className=" font-semibold text-sm leading-5 text-textSecondary">
                                All Messages ({chatUser?.length})
                            </span>
                        </div>
                        <div className="md:w-[336px] px-5 bg-[#fff] h-[35px] rounded-[30px] flex justify-center items-center">
                            <input
                                type="text"
                                className=" w-full h-full bg-transparent outline-none border-none"
                                onChange={SearchHandler}
                                placeholder="Search"
                            />
                            <div className=" w-[17px] h-[17px]">
                                <SearchIcon className=" text-[#616161] w-full h-full" />
                            </div>
                        </div>
                    </div>
                    <Scrollbar className="w-full !h-[calc(100vh-540px)]">
                        <div className=" flex flex-col gap-3">
                            {chatUser &&
                                chatUser
                                    ?.filter((e) =>
                                        e?.userName
                                            ?.toLowerCase()
                                            ?.includes(
                                                userFilter?.toLowerCase()
                                            )
                                    )
                                    ?.map((element, i) => (
                                        <UserCard key={i} {...element} />
                                    ))}
                        </div>
                    </Scrollbar>
                </div>
                <div className="col-span-5 relative before:absolute before:content-[' '] before:w-[3px] before:h-full before:bg-white before:top-0 before:-left-[31px] before:rounded-full">
                    <UserRightComponents
                        name="Ruhul Amin Tusar"
                        title="Maple Leaf International School"
                        user={user}
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vulputate ut mauris sem. At platea erat diam sed proin.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vulputate ut mauris sem. At platea erat diam sed proin."
                    />
                </div>
            </div>
        </section>
    );
};
