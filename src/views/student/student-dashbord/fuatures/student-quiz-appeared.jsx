import React from "react";
import { Scrollbar } from "shared/components/scrollbar";
import QuizAppeared1 from "assets/img/quiz-appeared1.png";
import QuizAppeared2 from "assets/img/quiz-appeared2.png";
import { Image } from "shared/components/image";
const QuizAppearedTile = () => {
    return (
        <div className="mb-3 cursor-pointer hover:bg-gray-200 p-4 rounded-3xl md:bg-[#fff] bg-[#f1f1f1] shadow-sm max-md:w-[140px]">
            <div className="flex justify-between items-center">
                <Image src={QuizAppeared1} className="w-[100px] h-[100px]" />
                <div className=" hidden md:block">
                    <div className="flex flex-col ml-2">
                        <h1 className="text-light text-xs">Total Mark</h1>
                        <p className="text-5xl font-bold">23</p>
                    </div>
                </div>
            </div>
            <div className="rounded-[30px] p-2 mt-3 md:bg-[#f1f1f1]">
                <div className="flex items-center space-x-2">
                    <Image
                        src={QuizAppeared2}
                        className="w-5 md:w-[100px] h-5 md:h-[100px]"
                    />
                    <p className=" max-md:text-[10px] max-md:leading-[15px] max-md:font-normal">
                        Chapter-1 : Speed
                    </p>
                </div>
                <div className="flex md:flex-row flex-col md:items-center justify-between my-1 text-textSecondary text-xs md:space-x-2">
                    <p className=" m-0 p-0">Question: 25</p>
                    <p className=" m-0 p-0">Time : 25 minutes</p>
                </div>
                <p className="text-textSecondary hidden md:block ">
                    27th July, 2021
                </p>
            </div>
        </div>
    );
};

const QuizAppeared = () => {
    return (
        <>
            <div className=" hidden md:block absolute -top-4 left-0">
                <h1 className="text-textSecondary bg-white titleTab font-semibold py-2 px-4">
                    Quiz Appeared
                </h1>
            </div>
            <div className=" w-full h-full">
                <Scrollbar className=" max-md:flex max-md:flex-wrap max-md:gap-x-[18px] max-md:gap-y-[23px]">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                        <QuizAppearedTile />
                    ))}
                </Scrollbar>
            </div>
        </>
    );
};

export default QuizAppeared;
