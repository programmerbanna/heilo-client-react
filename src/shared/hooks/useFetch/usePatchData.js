import { useQuery } from "@tanstack/react-query";

// custom imports
import fetchApi from "../fetchApi";

// -------------- PATCH DATA ----------------//
export const usePatchData = (path, key) => {
  async function fetched() {
    const res = await fetchApi().patch(path);
    return res;
  }
  const {
    data,
    isLoading: loading,
    isError: error,
    isSuccess: success,
  } = useQuery([key], fetched);
  return { data: data?.data, loading, error, success };
};
