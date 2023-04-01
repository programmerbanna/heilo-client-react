import { chatUser } from "demo-data";
import React from "react";
import { Scrollbar } from "shared/components/scrollbar";
import ChatUserCard from "./chat-user-card";
import { SearchIcon } from "shared/components/icons";
import { useState } from "react";
import { useGetConversationQuery } from "shared/redux/features/conversation/conversationApi";
const ChatUser = () => {
  const [userFilter, setUserFilter] = useState("");
  const SearchHandler = (e) => {
    setUserFilter(e?.target?.value);
  };

  // redux events
  const { isError, isLoading, data: conversations } = useGetConversationQuery();

  console.log("conversations", conversations);
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
          All Messages ({chatUser?.length})
        </span>
      </div>
      <Scrollbar className="w-full !h-[calc(100vh-180px)]">
        <div className=" flex flex-col gap-3">
          {chatUser &&
            chatUser
              ?.filter((e) =>
                e?.userName?.toLowerCase()?.includes(userFilter?.toLowerCase())
              )
              ?.map((element, i) => <ChatUserCard key={i} {...element} />)}
        </div>
      </Scrollbar>
    </>
  );
};

export default ChatUser;
