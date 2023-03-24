import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useUserStatus = () => {
  const [userType, setUserType] = useState(undefined);
  const auth = useSelector((state) => state?.auth);

  useEffect(() => {
    if (auth?.token && auth?.user) {
      setUserType(auth?.user?.role);
    }
  }, [auth]);
  return userType;
};

export default useUserStatus;
