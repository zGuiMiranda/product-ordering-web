"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600000,
    },
    mutations: {},
  },
});
const QueryClientContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};

export default QueryClientContextProvider;
