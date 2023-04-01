// internal imports
import heiloApi from "shared/redux/api";

const coversationApi = heiloApi.injectEndpoints({
  endpoints: (builder) => ({
    getConversation: builder.query({
      query: () => "/get-conversation",
    }),
    createConversation: builder.mutation({
      query: () => ``,
    }),
    getMessages: builder.query({
      query: (id) => `/get-message/${id}`,
    }),
  }),
});
export const { useGetConversationQuery, useGetMessagesQuery } = coversationApi;
