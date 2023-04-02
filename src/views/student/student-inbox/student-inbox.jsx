import React, { useState } from "react";
import ChatBox from "./features/chat-box";

import ChatUser from "./features/chat-user";
const StudentInbox = () => {
  const [getCoversationId, setConversationId] = useState(null);

  return (
    <section>
      <div className=" grid grid-cols-12 w-full h-[90vh]">
        <div className=" col-span-5  h-full px-5">
          <div className=" w-full ">
            <ChatUser setConversationId={setConversationId} />
          </div>
        </div>
        <div className=" col-span-7  border-l  border-solid border-[#dedede]">
          <ChatBox conversationId={getCoversationId} />
        </div>
      </div>
    </section>
  );
};

export default StudentInbox;
