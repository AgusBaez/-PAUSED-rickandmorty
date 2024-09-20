import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../services/api/fetchCharacter";

export const useCharacters = () => {
  const { data, error, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: async ({ pageParam = 1 }) => {
        const results = await fetchCharacter(pageParam, "character", "");
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

