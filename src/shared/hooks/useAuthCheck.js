import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "shared/redux/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.user) {
        dispatch(
          userLoggedIn({
            user: auth.user,
            token: auth.token,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
