import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SendArrow, FileSharingIcon } from "shared/components/icons";
import { Scrollbar } from "shared/components/scrollbar";
import { clx } from "shared/configs";
import { useGetMessagesQuery } from "shared/redux/features/conversation/conversationApi";

const ChatBox = ({ conversationId }) => {
  const [receiverUser, setReceiverUser] = useState({});

  // redux events
  const {
    isLoading,
    isSuccess,
    data: messages,
  } = useGetMessagesQuery(conversationId);
  const { user } = useSelector((state) => state?.auth);

  // useEffects for event handlers
  useEffect(() => {
    const getFilterUser =
      isSuccess &&
      !isLoading &&
      messages?.filter((message) => message?.receiverId?._id !== user?._id)[0];
    setReceiverUser(getFilterUser?.receiverId);
  }, [conversationId, messages, isLoading, isSuccess, user]);

  return (
    <>
      {conversationId ? (
        <div className=" pl-5 flex flex-col">
          <div className={clx(" flex flex-row gap-[23px] h-[72px]")}>
            <div className="pl-[23px] flex items-center relative">
              <div className=" h-[49px] w-[49px] rounded-full relative  overflow-hidden">
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
            <div className="w-full"></div>
          </Scrollbar>
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
