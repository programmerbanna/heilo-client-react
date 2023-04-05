import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { SendArrow, FileSharingIcon } from "shared/components/icons";
import { Scrollbar } from "shared/components/scrollbar";
import { clx } from "shared/configs";
import {
  useCreateMessageMutation,
  useGetConversationQuery,
  useGetMessagesQuery,
} from "shared/redux/features/conversation/conversationApi";
import socket from "socket.config";
import UserChatting from "../partials/user-chatting";

const ChatBox = ({ conversationId }) => {
  const scrollRef = useRef();
  const [inputMessage, setInputMessage] = useState("");
  const [receiverUser, setReceiverUser] = useState({});

  // redux events
  const {
    isLoading: messagesLoading,
    isSuccess: messagesSuccess,
    data: messages,
  } = useGetMessagesQuery({ conversationId, limit: 10, offset: 0 });

  const {
    isLoading: conversationLoading,
    isSuccess: conversationSuccess,
    data: conversation,
  } = useGetConversationQuery(conversationId);

  const [createMessage] = useCreateMessageMutation();

  // current logged in user
  const { user } = useSelector((state) => state?.auth);

  useEffect(() => {
    const getReceiverUser =
      !conversationLoading &&
      conversationSuccess &&
      conversation[0]?.members.find((member) => member._id !== user?._id);

    setReceiverUser(getReceiverUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId, conversation, conversationLoading, conversationSuccess]);

  // console.log("receiverUser", receiverUser);

  // function events
  const onKeyUp = (e) => {
    if (e.key === "Enter" && e.keyCode === 13 && inputMessage) {
      socket.emit("sendMessage", {
        conversationId,
        senderId: user,
        receiverId: receiverUser,
        text: inputMessage,
      });
      createMessage({
        conversationId,
        receiverId: receiverUser?._id,
        text: inputMessage,
      });
      setInputMessage("");
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);
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
          <Scrollbar className="w-full !h-[calc(100vh-200px)] pb-[10px]">
            <div className="w-full flex flex-col gap-y-6 ">
              {!messagesLoading && messagesSuccess && (
                <React.Fragment>
                  <UserChatting
                    messages={messages}
                    conversation={conversation}
                  />
                </React.Fragment>
              )}
            </div>
          </Scrollbar>
          <div className=" flex flex-row items-center gap-6">
            <div className=" w-[23.44px] h-[39.27px] cursor-pointer">
              <FileSharingIcon className="w-full h-full" />
              {/* <input type="file" /> */}
            </div>
            <div className="w-full px-5 bg-[#E2E2E2] h-[45px] rounded-[30px] flex justify-center items-center">
              <input
                type="text"
                value={inputMessage}
                className=" w-full h-full bg-transparent outline-none border-none "
                placeholder="Write message"
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyUp={onKeyUp}
              />
            </div>
            <div className=" w-[49.95px] h-[45.9px] cursor-pointer">
              <SendArrow className="w-full h-full" />
            </div>
          </div>
        </div>
      ) : (
        <div className=" pl-5 flex w-full h-full items-center justify-center">
          Please select a participant!
        </div>
      )}
    </>
  );
};

export default ChatBox;
