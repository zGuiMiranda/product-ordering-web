"use client";
import { useToast } from "@/components/ui/use-toast";
import { MessageType } from "@/constants/types";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useLoading } from "./loading-context-provider";

const QueryClientContextProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<MessageType>(null);
  const locale = useLocale();
  const { toast } = useToast();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    async function loadLocaleData() {
      try {
        const messages = await import(`../../locales/${locale}.json`);
        setMessages(messages.Generic);
      } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
      }
    }
    loadLocaleData();
    return () => {
      setMessages([]);
    };
  }, [locale]);

  const queryClient = useMemo(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            toast({
              title: messages?.error || "Opsssssss!",
              description: messages?.errorDescription || error.message,
              variant: "destructive",
            });

            setIsLoading(false);
          },
          onSettled: () => {
            setIsLoading(false);
          },
          onSuccess: () => {
            setIsLoading(false);
          },
        }),
        defaultOptions: {
          queries: {
            staleTime: 600000,
          },
          mutations: {},
        },
      }),
    [messages?.error, messages?.errorDescription, setIsLoading, toast]
  );

  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};

export default QueryClientContextProvider;
