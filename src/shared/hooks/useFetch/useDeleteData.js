import { useMutation } from "@tanstack/react-query";

// custom imports
import fetchApi from "../fetchApi";

// -------------- DELETE DATA ---------------- //
export const useDeleteData = (path, key) => {
  async function fetched(post) {
    const res = await fetchApi().delete(path, { data: post });
    return res;
  }
  return useMutation([key], fetched);
};
