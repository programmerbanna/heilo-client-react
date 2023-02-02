import { useMutation } from "@tanstack/react-query";

// custom imports
import fetchApi from "../fetchApi";

// -------------- POST DATA ----------------
export const usePostData = (path, key) => {
  async function fetched(post) {
    const res = await fetchApi().post(path, post);
    return res;
  }
  return useMutation([key], fetched);
};
