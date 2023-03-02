import React from "react";
import { StarIcon } from "shared/components/icons";
import { Scrollbar } from "shared/components/scrollbar";
// import { StarIcon } from "../../icons/student-dashboard/star-icon";
const FavouriteTutorTile = () => {
    return (
        <div className="mb-3 border-b-2 border-[#dddddd] cursor-pointer hover:bg-gray-200 p-4 rounded-tl-2xl">
            <div className="flex items-center text-textSecondary font-semibold text-xs justify-between">
                <p>1. Adnan Ali</p>
                <p className="flex items-center">
                    <StarIcon className="text-[#FEDB41] w-4 h-4 -mt-0.5 mr-1" />{" "}
                    4.5
                </p>
                <p>Topic- Mathematics</p>
                <p>BUET</p>
            </div>
        </div>
    );
};
const FavouriteTutors = () => {
    return (
        <>
            <div className=" absolute -top-4 left-0">
                <h1 className="text-textSecondary bg-white titleTab font-semibold  py-2 px-4">
                    Favourite Tutors
                </h1>
            </div>
            <div className=" w-full h-full">
                <Scrollbar>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                        <FavouriteTutorTile />
                    ))}
                </Scrollbar>
            </div>
        </>
    );
};

export default FavouriteTutors;
