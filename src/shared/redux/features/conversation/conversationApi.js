// internal imports
import heiloApi from "shared/redux/api";

const coversationApi = heiloApi.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: () => "/get-conversations",
    }),
    getConversation: builder.query({
      query: (conversationId) => `/get-conversation/${conversationId}`,
    }),
    createConversation: builder.mutation({
      query: () => ``,
    }),
    getMessages: builder.query({
      query: (conversationId) => `/get-message/${conversationId}`,
    }),
  }),
});
export const {
  useGetConversationsQuery,
  useGetMessagesQuery,
  useGetConversationQuery,
} = coversationApi;
