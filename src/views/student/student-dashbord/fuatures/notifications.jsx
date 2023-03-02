import React from "react";
import { Image } from "shared/components/image";
import teacher from "assets/img/teacher.png";
import { Scrollbar } from "shared/components/scrollbar";

const Notifications = () => {
    return (
        <>
            <div className="pt-3 md:pt-[17px] pb-4 md:pb-[13px]">
                <h5 className=" font-semibold text-lg leading-[27px] text-[#3DDEA5]">
                    Notifications
                </h5>
            </div>
            <div className=" w-full h-[90%] md:h-[84%]">
                <Scrollbar>
                    {[
                        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                    ].map(() => (
                        <div className="bg-[#B4F4DD] flex items-center cursor-pointer px-4 py-2 mb-3 rounded-3xl  hover:bg-[#97f8d5] shadow-sm">
                            <div className="!w-[50px] !h-[50px]">
                                <Image src={teacher} />
                            </div>
                            <div className="ml-4 text-textSecondary">
                                <p className="m-0 text-xs md:text-base leading-[18px] md:leading-6 font-light">
                                    You have received a
                                    <span className="font-semibold px-1">
                                        tution request
                                    </span>
                                    from
                                </p>
                                <p className="m-0 text-xs md:text-base leading-[18px] md:leading-6 font-light">
                                    Salsabil Murshed.
                                </p>
                            </div>
                        </div>
                    ))}
                </Scrollbar>
            </div>
        </>
    );
};

export default Notifications;
