import { useLoading } from "@/context/loading-context-provider";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useGetEntityHook = <TData, TResult, TError>(
  queryFn: () => Promise<TResult[]>,
  key: string
): UseQueryResult<TData, TError> => {
  const { setIsLoading } = useLoading();

  return useQuery({
    queryFn: async () => {
      setIsLoading(true);
      const result = await queryFn();
      return result;
    },
    queryKey: [key],
  });
};

export default useGetEntityHook;
