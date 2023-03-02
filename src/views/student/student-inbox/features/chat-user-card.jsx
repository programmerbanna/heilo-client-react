import React from "react";
import { clx } from "shared/configs";

const ChatUserCard = ({ userName, activeUser }) => {
    return (
        <div
            className={clx(
                " border-l-[10px] border-solid bg-[#f8f8f8] flex flex-row gap-[15px] h-[72px] cursor-pointer pr-[10px]",
                activeUser ? "border-primaryLight" : "border-[#c4c4c4]"
            )}
        >
            <div className="pl-[15px] flex items-center relative">
                <div className=" h-[49px] w-[49px] rounded-full bg-black"></div>
                <div
                    className={clx(
                        " p-1 bg-primaryLight border-[3px] border-solid border-[#f8f8f8] rounded-full absolute bottom-[13px] -right-[2px]",
                        activeUser ? " block" : "hidden"
                    )}
                ></div>
            </div>
            <div className=" flex justify-center flex-col w-[35%] ">
                <h4 className=" m-0 p-0 font-semibold text-lg leading-[27px] text-textSecondary truncate ">
                    {userName}
                </h4>
                <span className=" text-sm font-light leading-[21px] text-[#CFD8DC]">
                    Last seen at 5:32
                </span>
            </div>
            <div className=" flex flex-col w-[41%] justify-center">
                <span className=" font-semibold text-sm leading-[21px] text-[#cfd8dc] truncate">
                    You: Bhaiya kalke 5 tay set koro
                </span>
                <span className=" font-semibold text-sm leading-[21px] text-textSecondary">
                    (6:15 pm)
                </span>
            </div>
        </div>
    );
};

export default ChatUserCard;
