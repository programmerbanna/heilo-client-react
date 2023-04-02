import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { clx } from "shared/configs";
import { useGetMessagesQuery } from "shared/redux/features/conversation/conversationApi";

const ChatUserCard = ({
  updatedAt,
  _id: conversationId,
  setConversationId,
  members,
}) => {
  // redux events
  const { user } = useSelector((state) => state?.auth);
  const { _id: loggedInUserId } = user;

  const {
    isLoading,
    isSuccess,
    data: messages,
  } = useGetMessagesQuery(conversationId);

  const onClick = () => {
    setConversationId(conversationId);
  };

  // filtering receiver user
  const { image, name } = members?.filter(
    (member) => member?._id !== loggedInUserId
  )[0];

  // filtering sender user message
  const { text: myMessage } =
    !isLoading &&
    isSuccess &&
    messages
      ?.filter((message) => message?.senderId === loggedInUserId)
      ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))[0];

  // console.log(
  //   "getMessage",
  //   messages
  //     ?.filter((message) => message?.senderId === loggedInUserId)
  //     ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
  // );

  return (
    <>
      <div
        onClick={onClick}
        className={clx(
          " border-l-[10px] border-solid bg-[#f8f8f8] flex flex-row gap-[15px] h-[72px] cursor-pointer pr-[10px]"
          // activeUser ? "border-primaryLight" : "border-[#c4c4c4]"
        )}
      >
        <div className="pl-[15px] flex items-center relative">
          <div className=" h-[49px] w-[49px] rounded-full relative  overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={clx(
              " p-1 bg-primaryLight border-[3px] border-solid border-[#f8f8f8] rounded-full absolute bottom-[13px] -right-[2px]"
              // activeUser ? " block" : "hidden"
            )}
          ></div>
        </div>
        <div className=" flex justify-center flex-col w-[35%] ">
          <h4 className=" m-0 p-0 font-semibold text-lg leading-[27px] text-textSecondary truncate capitalize">
            {name}
          </h4>
          <span className=" text-sm font-light leading-[21px] text-[#CFD8DC]">
            Last seen at 5:32
          </span>
        </div>
        <div className=" flex flex-col w-[41%] justify-center">
          <span className=" font-semibold text-sm leading-[21px] text-[#cfd8dc] truncate">
            {myMessage && `You: ${myMessage}`}
          </span>
          <span className=" font-semibold text-sm leading-[21px] text-textSecondary">
            ({moment(updatedAt).format("h:mm A")})
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatUserCard;
