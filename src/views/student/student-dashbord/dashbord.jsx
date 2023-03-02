import React, { useState } from "react";
import { DashboardCard } from "shared/components/dashboard-card";
import { Scrollbar } from "shared/components/scrollbar";
import Notifications from "./fuatures/notifications";
import FavouriteTutors from "./fuatures/student-favourite-tutors";
import QuizAppeared from "./fuatures/student-quiz-appeared";
import TutionCompleted from "./fuatures/student-tution-completed";
import UpcommingSessions from "./fuatures/student-upcomming-sessions";

const Dashbord = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const data = [
    {
      cardName: "Upcoming Sessions",
      amount: "03",
      cardNumber: 1,
      color1: "text-[#02A17B]",
      color2: "text-[#45E7C0]",
    },
    {
      cardName: "Tutions completed",
      amount: "53",
      cardNumber: 2,
      color1: "text-[#00758F]",
      color2: "text-[#45DDE7]",
    },
    {
      cardName: "Quiz Appeared",
      amount: "13",
      cardNumber: 3,
      color1: "text-[#FFA800]",
      color2: "text-[#FAE0BA]",
    },
    {
      cardName: "Favourite Tutors",
      amount: "9",
      cardNumber: 4,
      color1: "text-[#DA4453]",
      color2: "text-[#FB9999]",
    },
  ];
  return (
    <div className=" w-full h-full  flex flex-col gap-[38.56px] md:gap-[70px]">
      <Scrollbar className="w-full h-full !pr-0">
        <div className=" w-full max-md:flex-wrap md:w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between mx-auto h-40 md:h-fit">
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
      </Scrollbar>

      <div className=" w-full h-full flex flex-col md:flex-row gap-[46px]">
        <div className=" md:bg-[#f8f8f8] w-full px-3 md:px-[55px] pb-[22px] md:pb-8 pt-10 md:pt-10  rounded-[30px] h-[calc(100vh-100px)] md:h-[calc(100vh-360px)]  relative">
          {(selectedCard === 1 && <UpcommingSessions />) ||
            (selectedCard === 2 && <TutionCompleted />) ||
            (selectedCard === 3 && <QuizAppeared />) ||
            (selectedCard === 4 && <FavouriteTutors />)}
        </div>
        <div className=" bg-[#f8f8f8] w-full px-3 md:px-[55px] pb-[22px] md:pb-8 rounded-[30px] h-[calc(100vh-100px)] md:h-[calc(100vh-360px)]">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
