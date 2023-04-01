// internal imports
import heiloApi from "shared/redux/api";

const coversationApi = heiloApi.injectEndpoints({
  endpoints: (builder) => ({
    getConversation: builder.query({
      query: () => "/get-conversation",
    }),
  }),
});
export const { useGetConversationQuery } = coversationApi;
