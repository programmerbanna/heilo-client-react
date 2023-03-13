import React from "react";
import ChatBox from "views/student/student-inbox/features/chat-box";
import ChatUser from "views/student/student-inbox/features/chat-user";



const TeacherInbox = () => {
    return (
        <section>
            <div className=" grid grid-cols-12 w-full h-[90vh]">
                <div className=" col-span-5  h-full px-5">
                    <div className=" w-full ">
                        <ChatUser />
                    </div>
                </div>
                <div className=" col-span-7  border-l  border-solid border-[#dedede]">
                    <ChatBox />
                </div>
            </div>
        </section>
    );
};

export default TeacherInbox;
