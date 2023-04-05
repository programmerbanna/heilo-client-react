import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { clx } from "shared/configs";
import useActiveUsers from "shared/hooks/useActiveUsers";
import { useGetMessagesQuery } from "shared/redux/features/conversation/conversationApi";
import socket from "socket.config";

const ChatUserCard = ({
  updatedAt: conversationUpdatedAt,
  _id: conversationId,
  setConversationId,
  members,
}) => {
  const [lastMessage, setLastMessage] = useState({});
  const [activeUser, setActiveUser] = useState({});

  // hooks
  const activeUsers = useActiveUsers();

  // redux events
  const { user } = useSelector((state) => state?.auth);
  const { _id: loggedInUserId } = user;

  const {
    isLoading,
    isSuccess,
    data: messages,
  } = useGetMessagesQuery({ conversationId, limit: 10 });

  const onClick = () => {
    setConversationId(conversationId);
  };

  // filtering receiver user
  const {
    image,
    name,
    _id: receiverUserId,
  } = members?.filter((member) => member?._id !== loggedInUserId)[0];

  useEffect(() => {
    const getMessage =
      !isLoading &&
      isSuccess &&
      messages?.length > 0 &&
      messages
        ?.filter((message) => message?.senderId?._id === loggedInUserId)
        ?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];
    setLastMessage(getMessage);
  }, [loggedInUserId, messages, isLoading, isSuccess]);

  useEffect(() => {
    const filterUser = activeUsers?.find(
      (user) => user?.userId === receiverUserId
    );
    setActiveUser(filterUser);
  }, [activeUsers, receiverUserId]);

  useEffect(() => {
    socket.on("senderLastMessage", (incomingMessage) => {
      setLastMessage({ ...incomingMessage, updatedAt: new Date() });
    });
  }, []);

  useEffect(() => {
    socket.on("getUsers", (lastseen) => {
      console.log(lastseen);
    });
  }, []);

  // console.log("active user", activeUser);

  return (
    <>
      <div
        onClick={onClick}
        className={clx(
          " border-l-[10px] border-solid bg-[#f8f8f8] flex flex-row gap-[15px] h-[72px] cursor-pointer pr-[10px] overflow-hidden",
          activeUser?.userId === receiverUserId
            ? "border-primaryLight"
            : "border-[#c4c4c4]"
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
              " p-1 bg-primaryLight border-[3px] border-solid border-[#f8f8f8] rounded-full absolute bottom-[13px] -right-[2px]",
              activeUser?.userId === receiverUserId ? " block" : "hidden"
            )}
          ></div>
        </div>
        <div className=" flex justify-center flex-col w-[35%] ">
          <h4 className=" m-0 p-0 font-semibold text-lg leading-[27px] text-textSecondary truncate capitalize">
            {name}
          </h4>
          {!(activeUser?.userId === receiverUserId) && (
            <span className=" text-sm font-light leading-[21px] text-[#CFD8DC]">
              Last seen at {moment(activeUser?.updatedAt).format("h:mm A")}
            </span>
          )}
        </div>
        <div className=" flex flex-col w-[41%] justify-center">
          <span className=" font-semibold text-sm leading-[21px] text-[#cfd8dc] truncate">
            {lastMessage && lastMessage?.senderId?._id === loggedInUserId
              ? `You: ${lastMessage?.text}`
              : lastMessage && `${lastMessage?.text}`}
          </span>
          <span className=" font-semibold text-sm leading-[21px] text-textSecondary">
            (
            {moment(lastMessage?.updatedAt || conversationUpdatedAt).format(
              "h:mm A"
            )}
            )
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatUserCard;
