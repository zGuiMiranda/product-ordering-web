import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useGetEntityHook = <TData, TResult, TError>(
  queryFn: () => Promise<TResult[]>,
  key: string
): UseQueryResult<TData, TError> => {
  return useQuery({
    queryFn: queryFn,
    queryKey: [key],
  });
};

export default useGetEntityHook;
