import { useMutation } from "@tanstack/react-query";

// custom imports
import fetchApi from "../fetchApi";

// -------------- PUT DATA ---------------- //
export const usePutData = (path, key) => {
  async function fetched(post) {
    const res = await fetchApi().put(path, post);
    return res;
  }
  return useMutation([key], fetched);
};
