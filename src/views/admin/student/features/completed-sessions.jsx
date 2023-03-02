import React from "react";
import { Scrollbar } from "shared/components/scrollbar";
const Card = () => {
    return (
        <div className=" w-full flex items-center flex-row bg-white rounded-full px-3">
            <div className=" w-[18%] flex justify-center items-center border-2 border-solid border-[#01b489] rounded-full py-2 px-2 my-2 mr-3">
                <span className="truncate font-semibold text-sm leading-5 text-[#7d7c7c]">
                    27th July, 2021
                </span>
            </div>
            <div className=" flex justify-center w-[10%] py-2 px-3 border-l border-solid border-[#01B489]">
                <span className="truncate font-semibold text-lg text-[#7d7c7c]">
                    ID 11121
                </span>
            </div>
            <div className=" flex justify-center w-[18%] py-2 px-3  border-x border-solid border-[#01B489]">
                <span className=" truncate font-semibold text-lg text-[#7d7c7c]">
                    Ruhul Tusar
                </span>
            </div>
            <div className=" flex justify-center w-[30%] py-2 px-3 ">
                <span className=" truncate font-normal text-lg text-[#7d7c7c]">
                    <small className=" font-bold">Topic-</small> Polygons I
                    Gerometry I Maths B
                </span>
            </div>
            <div className=" flex justify-center w-[23%] py-2 px-3 border-l border-solid border-[#01B489]">
                <span className=" truncate font-semibold text-lg text-[#01B489]">
                    Time- 4:30-5.30 pm
                </span>
            </div>
        </div>
    );
};
export const CompletedSessions = () => {
    return (
        <Scrollbar className="w-full !h-[calc(100vh-500px)] pt-[10px]">
            <div className="w-full h-full flex flex-col gap-2">
                {[
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18,
                ].map((element, id) => (
                    <Card key={id} {...element} />
                ))}
            </div>
        </Scrollbar>
    );
};
