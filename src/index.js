import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import UserProvider from "shared/hooks/contextApi/useAuth";

// custom imports
import route from "shared/route";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 60 * 1000 * 60,
      refetchOnMount: true,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <UserProvider> 
        <RouterProvider router={route} />
    </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
