import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useUserRole = () => {
  const [userType, setUserType] = useState(undefined);
  const auth = useSelector((state) => state?.auth);

  useEffect(() => {
    if (auth?.user) {
      setUserType(auth?.user?.role);
    }
  }, [auth]);
  return userType;
};

export default useUserRole;
