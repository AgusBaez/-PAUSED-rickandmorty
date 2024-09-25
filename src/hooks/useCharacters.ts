import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchApi } from "../services/api/fetchApi";

export const useCharacters = (option) => {
  const { data, error, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: async ({ pageParam = 1 }) => {
        const results = await fetchApi(pageParam, option, "");
        return results;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
    });

  return {
    data,
    error,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    getCharacters: data?.pages.flatMap((p) => p.results),
  };
};

