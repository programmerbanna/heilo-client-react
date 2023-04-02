import React from "react";
import { useSelector } from "react-redux";

const UserChatting = ({ message }) => {
  // redux events
  const { user } = useSelector((state) => state?.auth);
  const { _id: loggedInUserId } = user;

  return (
    <>
      {/* receiver user */}
      {message?.senderId?._id === loggedInUserId ? (
        <div className="flex w-full justify-end">
          <div className="w-auto flex">
            <div className="w-auto max-w-[365px] bg-[#B8F3DE] p-[18px] text-sm rounded-[18px] mr-1.5 mt-4 text-[#444F55]">
              {message?.text}
            </div>
            <div className="h-[49px] w-[49px] rounded-full relative  overflow-hidden">
              <img
                src={message?.senderId?.image}
                alt={message?.senderId?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <div className="h-[49px] w-[49px] rounded-full relative  overflow-hidden">
            <img
              src={message?.senderId?.image}
              alt={message?.senderId?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-auto max-w-[365px] bg-[#F8F8F8] p-[18px] text-sm rounded-[18px] ml-1.5 mt-4 text-[#7D7C7C]">
            {message?.text}
          </div>
        </div>
      )}
    </>
  );
};

export default UserChatting;
