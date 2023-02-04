import React from "react";
import { clx } from "shared/configs";
import { LargeCardShape } from "./largeCardShape";
import { SmallCardShape } from "./smallCardShape";

const DashboardCard = ({
  color1,
  color2,
  cardNumber,
  amount,
  cardName,
  selectedCard,
  setSelectedCard,
}) => {
  return (
    <div
      className={`rounded-[17px] h-32 w-56 ${
        selectedCard === cardNumber ? "bg-[#5f5f5f] text-white" : "bg-[#f5f5f5]"
      } cursor-pointer relative text-right py-3 px-5`}
      onClick={() => setSelectedCard(cardNumber)}
    >
      <h1 className="text-sm">{cardName}</h1>
      <h1 className="text-xl font-bold mt-3">{amount}</h1>
      <LargeCardShape className={clx(color1, "absolute top-[6px] left-0")} />
      <SmallCardShape
        className={clx(color2, "absolute top-[31px] left-[-12px]")}
      />
    </div>
  );
};

export default DashboardCard;
