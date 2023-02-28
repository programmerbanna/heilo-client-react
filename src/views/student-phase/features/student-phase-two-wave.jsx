import React from "react";
import { Button } from "shared/components/button";
import { Image } from "shared/components/image";
import wave from "assets/img/wave2.png";
import phonewave from "assets/img/wave2-phone.png";
const StudentPhaseTwoWave = () => {
    const Data = [
        {
            label: "Learn on demand",
            link: "",
        },
        {
            label: "Test yourself",
            link: "",
        },
        {
            label: "Make a study plan",
            link: "",
        },
    ];
    return (
        <>
            <Image
                src={wave}
                alt="Hero Section Image"
                layout="fill"
                className=" hidden md:block"
            />
            <Image
                src={phonewave}
                alt="Hero Section Image"
                layout="fill"
                className=" block md:hidden h-[403px]"
            />

            <div className="z-20 mt-0  absolute md:w-full">
                <div className="w-full flex  flex-col md:flex-row md:flex-wrap items-start gap-[31px] md:gap-[80px] md:justify-center">
                    {Data?.map((element, i) => (
                        <Button
                            key={i}
                            className="z-20 w-[202px] h-[50px] md:w-[350px] md:h-[70px] bg-white rounded-[50px] shadow-[0px_4px_20px_rgba(104,109,224,0.5)] justify-center uppercase text-base md:text-2xl leading-6 md:leading-9 font-normal text-black"
                            label={element?.label}
                            // link={element?.link}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default StudentPhaseTwoWave;
