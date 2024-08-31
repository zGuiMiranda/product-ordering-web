import { useToast } from "@/components/ui/use-toast";
import { MessageType } from "@/constants/types";
import { useLoading } from "@/context/loading-context-provider";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const useMutateEntityHook = <TData, TResult, TError>(
  mutationFn: (data: TData, locale: string) => Promise<TResult>,
  options?: UseMutationOptions<TResult, TError, TData>
): UseMutationResult<TResult, TError, TData> => {
  const locale = useLocale();
  const { toast } = useToast();
  const [messages, setMessages] = useState<MessageType>(null);
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
  }, [locale]);

  return useMutation({
    mutationFn: (data: TData) => mutationFn(data, locale),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      toast({
        title: messages?.success || "Bem sucedido!",
        description:
          messages?.successDescription || "Ação realizada com sucesso.",
        className: "bg-black text-white",
      });
      setIsLoading(false);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: messages?.error || "Ocorreu um erro!",
        description: messages?.errorDescription || "Algo de errado aconteceu.",
      });
      setIsLoading(false);
    },

    onSettled: () => {
      setIsLoading(false);
    },

    ...options,
  });
};

export default useMutateEntityHook;
