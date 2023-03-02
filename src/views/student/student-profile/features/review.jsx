import React from "react";
import { StarIcon } from "shared/components/icons";
import { Image } from "shared/components/image";
import ReviewerImage from "assets/img/student.png";
const Review = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center relative">
            <div className="absolute -top-5 right-5 md:top-10 md:right-10">
                <Image src={ReviewerImage} className="!w-[70px]" />
            </div>
            <div className="w-2/3">
                <span className="flex mb-4 items-center">
                    <StarIcon className="text-[#FEDB41] w-5 h-5" />
                    <StarIcon className="text-[#FEDB41] w-5 h-5" />
                    <StarIcon className="text-[#FEDB41] w-5 h-5" />
                    <StarIcon className="text-[#FEDB41] w-5 h-5" />
                    <StarIcon className="text-textSecondary w-5 h-5" />
                    <p className="font-bold text-textSecondary ml-1.5 text-2xl mt-1.5">
                        / 4
                    </p>
                </span>
                <p className="text-textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor vulputate ut mauris sem. At platea erat diam sed
                    proin.
                </p>
            </div>
        </div>
    );
};

export default Review;
