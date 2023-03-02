import React from "react";
import { Image } from "shared/components/image";
import ReviewerPic from "assets/img/student.png";
const ReviewTile = () => {
    return (
        <div className="grayDiv rounded-full mb-3 px-5 py-2 w-64 flex items-center">
            <div>
                <Image src={ReviewerPic} className="w-[33px]" />
            </div>
            <div className="ml-5">
                <h2 className="font-semibold text-textSecondary text-sm">
                    Imran Khan
                </h2>
                <h2 className="font-light text-textSecondary text-sm">
                    Class 6, DRMC
                </h2>
            </div>
        </div>
    );
};

export default ReviewTile;
