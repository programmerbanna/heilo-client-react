import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import socket from "socket.config";

const useActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  // redux events
  const { user } = useSelector((state) => state?.auth);

  useEffect(() => {
    socket.emit("addUsers", user?._id);
    socket.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [user?._id]);
  return activeUsers;
};

export default useActiveUsers;
