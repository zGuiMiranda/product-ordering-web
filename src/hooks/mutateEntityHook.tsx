import { useToast } from "@/components/ui/use-toast";
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
  const [messages, setMessages] = useState<any>(null);

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
    onSuccess: () => {
      toast({
        title: messages?.success || "Bem sucedido!",
        description:
          messages?.successDescription || "Ação realizada com sucesso.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: messages?.error || "Ocorreu um erro!",
        description: messages?.errorDescription || "Algo de errado aconteceu.",
      });
    },
    ...options,
  });
};

export default useMutateEntityHook;
