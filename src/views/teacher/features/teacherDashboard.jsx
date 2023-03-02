import React, { useState } from "react";
import { DashboardCard } from "shared/components/dashboard-card";
import Notifications from "./dashborad-feature/notifications";
import WeeklyContribution from "./dashborad-feature/teacher-weeklyContribution";
import TutionCompleted from "./dashborad-feature/teacher-tuitionCompleted";
import TutionRequest from "./dashborad-feature/teacher-tuitionRequest";
import UpcomingSession from "./dashborad-feature/teacher-upcomingSession";


const TeacherDashbord = () => {
    const [selectedCard, setSelectedCard] = useState(1);
    const data = [
        {
            cardName: "Tution Request", /* Upcoming Sessions */
            amount: "03",
            cardNumber: 1,
            color1: "text-[#02A17B]",
            color2: "text-[#45E7C0]",
        },
        {
            cardName: "Upcoming Sessions", /* Tutions completed */
            amount: "53",
            cardNumber: 2,
            color1: "text-[#00758F]",
            color2: "text-[#45DDE7]",
        },
        {
            cardName: " Tutions Completed", /* Quiz Appeared */
            amount: "13",
            cardNumber: 3,
            color1: "text-[#FFA800]",
            color2: "text-[#FAE0BA]",
        },
        {
            cardName: "Weekly Contribution", /* Favourite Tutors */
            amount: "9",
            cardNumber: 4,
            color1: "text-[#DA4453]",
            color2: "text-[#FB9999]",
        },
    ];
    return (
        <div className=" w-full h-full  flex flex-col gap-[38.56px] md:gap-[70px]">
            <div className=" w-full max-md:flex-wrap md:w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between mx-auto  max-md:overflow-x-auto h-40 md:h-fit">
                {data?.map((element, i) => (
                    <DashboardCard
                        key={i}
                        cardName={element?.cardName}
                        amount={element?.amount}
                        cardNumber={element?.cardNumber}
                        color1={element?.color1}
                        color2={element?.color2}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                    />
                ))}
            </div>
            <div className=" w-full  h-full flex flex-col md:flex-row gap-[46px]">
                <div className="overflow-hidden overflow-y-auto md:bg-[#f8f8f8] w-full px-3 md:px-[55px] pb-[22px] md:pb-8 pt-10 md:pt-10  rounded-[30px] h-[calc(100vh-250px)] md:h-[calc(100vh-250px)]  relative">25
                    {(selectedCard === 1 && <TutionRequest  />) ||
                        (selectedCard === 2 && <UpcomingSession/>) ||
                        (selectedCard === 3 && <TutionCompleted />) ||
                        (selectedCard === 4 && <WeeklyContribution />)}
                </div>
                <div className="overflow-hidden overflow-y-auto bg-[#f8f8f8] w-full px-3 md:px-[55px] pb-[22px] md:pb-8 rounded-[30px] h-[calc(100vh)] md:h-[calc(100vh-250px)]">
                    <Notifications />
                </div>
            </div>
        </div>
    );
};

export default TeacherDashbord;
