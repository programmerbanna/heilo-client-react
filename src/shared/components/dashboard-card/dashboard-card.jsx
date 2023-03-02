import React from "react";
import { clx } from "shared/configs";
import { LargeCardShape } from "./large-card-shape";
import { SmallCardShape } from "./small-card-shape";

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
      className={`rounded-[17px] !h-36 w-60 overflow-hidden shadow-md ${
        selectedCard === cardNumber ? "bg-[#5f5f5f] text-white" : "bg-[#f5f5f5]"
      } cursor-pointer relative text-right py-3 px-5`}
      onClick={() => setSelectedCard(cardNumber)}
    >
      <h1 className="text-sm">{cardName}</h1>
      <h1 className="text-xl font-bold mt-3">{amount}</h1>
      <LargeCardShape
        className={clx(
          color1,
          "h-full w-[68%] absolute top-[10px] -left-[2px]"
        )}
      />
      <SmallCardShape
        className={clx(color2, "absolute -bottom-[21px] left-[-13px]")}
      />
    </div>
  );
};

export default DashboardCard;
