import React from "react";
import { clx } from "shared/configs";

const Scrollbar = ({ children, className }) => {
    return (
        <div
            className={clx(
                " w-full h-full scrollbar Scrollbar scrollbar-thumb-[#747474] scrollbar-track-transparent scroll-smooth pr-5",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Scrollbar;
