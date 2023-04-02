import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ScrollableFeed from "react-scrollable-feed";
import { SendArrow, FileSharingIcon } from "shared/components/icons";
import { Scrollbar } from "shared/components/scrollbar";
import { clx } from "shared/configs";
import {
  useGetConversationQuery,
  useGetMessagesQuery,
} from "shared/redux/features/conversation/conversationApi";
import UserChatting from "../partials/user-chatting";

const ChatBox = ({ conversationId }) => {
  const [receiverUser, setReceiverUser] = useState({});

  // redux events
  const {
    isLoading: messagesLoading,
    isSuccess: messagesSuccess,
    data: messages,
  } = useGetMessagesQuery(conversationId);

  const {
    isLoading: conversationLoading,
    isSuccess: conversationSuccess,
    data: conversation,
  } = useGetConversationQuery(conversationId);

  // curren logged in user
  const { user } = useSelector((state) => state?.auth);

  useEffect(() => {
    const getReceiverUser =
      !conversationLoading &&
      conversationSuccess &&
      conversation[0]?.members.find((member) => member._id !== user?._id);

    setReceiverUser(getReceiverUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId, conversation, conversationLoading, conversationSuccess]);

  // console.log("receiver", receiverUser);

  return (
    <>
      {messagesLoading || conversationLoading ? (
        <div className=" pl-5 flex w-full h-full items-center justify-center">
          Loading...
        </div>
      ) : conversationId ? (
        <div className=" pl-5 flex flex-col">
          <div className={clx(" flex flex-row gap-[23px] h-[72px]")}>
            <div className="pl-[23px] flex items-center relative">
              <div className=" h-[40px] w-[40px] rounded-full relative  overflow-hidden">
                <img
                  src={receiverUser?.image}
                  alt={receiverUser?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className=" flex justify-center flex-col w-[80%] ">
              <h4 className=" m-0 p-0 font-semibold text-lg leading-[27px] text-textSecondary truncate capitalize">
                {receiverUser?.name}
              </h4>
              <span className=" text-sm font-light leading-[21px] text-[#CFD8DC]">
                {receiverUser?.currentInstitution?.name}
              </span>
            </div>
          </div>
          <ScrollableFeed className="w-full !h-[calc(100vh-200px)] pb-[10px] !scrollbar Scrollbar !scrollbar-thumb-[#7474748a]  !scroll-smooth pr-5">
            <div className="w-full flex flex-col gap-y-6 ">
              {!messagesLoading &&
                messagesSuccess &&
                messages?.length > 0 &&
                messages?.map((message, i) => (
                  <React.Fragment key={i}>
                    <UserChatting message={message} />
                  </React.Fragment>
                ))}
            </div>
          </ScrollableFeed>
          <div className=" flex flex-row items-center gap-6">
            <div className=" w-[23.44px] h-[39.27px] cursor-pointer">
              <FileSharingIcon className="w-full h-full" />
              {/* <input type="file" /> */}
            </div>
            <div className="w-full px-5 bg-[#E2E2E2] h-[45px] rounded-[30px] flex justify-center items-center">
              <input
                type="text"
                className=" w-full h-full bg-transparent outline-none border-none "
                placeholder="Write message"
              />
            </div>
            <div className=" w-[49.95px] h-[45.9px] cursor-pointer">
              <SendArrow className="w-full h-full" />
            </div>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </>
  );
};

export default ChatBox;
