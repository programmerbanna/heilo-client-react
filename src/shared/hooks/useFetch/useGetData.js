import { useQuery } from "@tanstack/react-query";

// custom imports
import fetchApi from "../fetchApi";

// -------------- GET DATA ---------------- //
export const useGetData = (path, key) => {
  async function fetched() {
    const res = await fetchApi().get(path);
    return res;
  }
  const {
    data,
    isLoading: loading,
    isError,
    isSuccess: success,
    refetch,
  } = useQuery({ queryKey: [key], queryFn: fetched, retry: 2 });
  return { data: data?.data, loading, isError, success, refetch };
};
