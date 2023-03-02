import React from "react";
import { Image } from "shared/components/image";
export const UserRightComponents = ({ user, name, title, desc }) => {
    return (
        <div className=" flex flex-col gap-10">
            <div className=" justify-end flex flex-row items-center gap-4">
                <div className=" flex flex-col text-right">
                    <h1 className=" font-semibold text-lg leading-7 text-[#444F55]">
                        {name}
                    </h1>
                    <span className=" text-sm text-[#444F55] leading-5 font-normal">
                        {title}
                    </span>
                </div>
                <div className=" w-[54px] h-[54px] rounded-full">
                    <Image
                        className="w-full h-full"
                        src={user}
                        alt="user image"
                    />
                </div>
            </div>
            <p className=" font-normal text-base leading-6 text-[#616161]">
                {desc}
            </p>
        </div>
    );
};
