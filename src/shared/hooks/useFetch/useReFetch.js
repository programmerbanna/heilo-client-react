import { useGetData } from "./useGetData";

// -------------- Refetching DATA ---------------- //
export const useReFetch = (path, key) => {
  const { refetch, data } = useGetData(path, key);
  return { refetch, data };
};
