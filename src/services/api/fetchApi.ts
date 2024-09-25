export const fetchApi = async (
  page: number | 1,
  option: "character" | "episode" | "location",
  query: string | ""
) => {
  return await fetch(
    `https://rickandmortyapi.com/api/${option}?page=${page}&name=${query}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error(`Error fetching`);
      return await res.json();
    })
    .then((res) => ({
      results: res.results,
      nextCursor: res.info.next
        ? Number(new URL(res.info.next).searchParams.get("page"))
        : undefined,
    }));
};

