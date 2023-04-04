import { useEffect } from "react";
import { useSelector } from "react-redux";
import socket from "socket.config";

export default function useAuth() {
  const auth = useSelector((state) => state?.auth);

  useEffect(() => {
    socket.emit("addUsers", auth?.user?._id);
  }, [auth?.user?._id]);

  if (auth?.user) {
    return true;
  } else {
    return false;
  }
}
