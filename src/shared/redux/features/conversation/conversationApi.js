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
      query: ({ conversationId, limit, offset }) =>
        `/get-message/${conversationId}?limit=${limit}&offset=${offset}`,
    }),
    createMessage: builder.mutation({
      query: (data) => ({
        url: `/send-message`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetConversationsQuery,
  useGetMessagesQuery,
  useGetConversationQuery,
  useCreateConversationMutation,
  useCreateMessageMutation,
} = coversationApi;
