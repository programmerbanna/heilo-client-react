import React from "react";
import { Scrollbar } from "shared/components/scrollbar";
import ChatUserCard from "./chat-user-card";
import { SearchIcon } from "shared/components/icons";
import { useState } from "react";
import { useGetConversationsQuery } from "shared/redux/features/conversation/conversationApi";
import { useSelector } from "react-redux";
const ChatUser = ({ setConversationId }) => {
  const [userFilter, setUserFilter] = useState("");
  const SearchHandler = (e) => {
    setUserFilter(e?.target?.value);
  };

  // redux events
  const { user } = useSelector((state) => state?.auth);
  const { isLoading, data: conversations } = useGetConversationsQuery();

  const { _id: loggedInUserId } = user;
  // console.log("conversations", conversations);

  return (
    <>
      <div className="w-full px-5 bg-[#c4c4c4] h-[45px] rounded-[30px] flex justify-center items-center">
        <input
          type="text"
          className=" w-full h-full bg-transparent outline-none border-none"
          onChange={SearchHandler}
          placeholder="Search"
        />
        <div className=" w-[27px] h-[27px]">
          <SearchIcon className=" text-[#616161] w-full h-full" />
        </div>
      </div>
      <div className=" my-4">
        <span className=" font-semibold text-lg leading-7 text-textSecondary">
          {conversations?.length > 0 &&
            ` All Messages (${conversations?.length})`}
        </span>
      </div>
      <Scrollbar className="w-full !h-[calc(100vh-180px)]">
        {conversations?.length > 0 ? (
          <div className=" flex flex-col gap-3">
            {conversations
              .filter((conversation) =>
                conversation.members.some(
                  (member) =>
                    member._id !== loggedInUserId &&
                    member.name
                      ?.toLowerCase()
                      .includes(userFilter.toLowerCase())
                )
              )
              ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
              .map((conversation, i) => (
                <React.Fragment key={i}>
                  <ChatUserCard
                    {...conversation}
                    setConversationId={setConversationId}
                  />
                </React.Fragment>
              ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center ">
            {isLoading ? "Loading..." : "No message"}
          </div>
        )}
      </Scrollbar>
    </>
  );
};

export default ChatUser;
