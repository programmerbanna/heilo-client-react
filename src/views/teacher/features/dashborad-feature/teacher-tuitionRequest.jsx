import { Image } from "shared/components/image";
import { Scrollbar } from "shared/components/scrollbar";
import user from "assets/img/teacher.png";

const SessionTile = () => {
    return (
        <div className="mb-3 cursor-pointer hover:bg-gray-200 p-1 rounded-2xl">
            <h1 className="titleTab bg-white tabBorder py-1 text-xs md:text-sm leading-[18px] md:leading-[21px]">
                27th July, 2021
            </h1>
            <div className="flex flex-col items-center mt-1">
                <div className="flex">
                    <div className="mr-6 w-[80px] h-[80px]">
                        <Image src={user} />
                    </div>
                    <div>
                        <div className="flex">
                            <h1 className="text-textSecondary font-semibold mr-5 text-base md:text-lg leading-4 md:leading-[27px]">
                                Ruhul Tusar
                            </h1>
                            <p className="titleTab border-2 py-0 px-4 text-xs md:text-sm leading-[18px] md:leading-[21px] font-medium border-[#C7495D]">
                                ID 1234
                            </p>
                        </div>
                        <h1 className="my-1 text-xs md:text-lg leading-[18px] md:leading-[27px]">
                            <span className="text-textSecondary font-semibold">
                                Topic-{" "}
                            </span>
                            Polygons I Gerometry I Maths B
                        </h1>
                        <h1 className="text-primaryLight font-semibold text-xs md:text-lg leading-[18px] md:leading-[27px]">
                            Time- 4:30-5.30 pm
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TutionRequest = () => {
    return (
        <>
            <div className=" absolute -top-4 left-0">
                <h1 className="text-textSecondary bg-white titleTab font-semibold  py-2 px-4">
                   tution Request
                </h1>
            </div>
            <div className=" w-full h-full">
                <Scrollbar>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                        <SessionTile />
                    ))}
                </Scrollbar>
            </div>
        </>
    );
};

export default TutionRequest;
