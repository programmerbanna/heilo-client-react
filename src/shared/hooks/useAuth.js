import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state?.auth);

  console.log("checking auth from auth component", auth);

  if (auth?.token && auth?.user) {
    return true;
  } else {
    return false;
  }
}
