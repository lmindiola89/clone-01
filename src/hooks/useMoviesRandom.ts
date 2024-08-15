import endpoint from "@/lib/endpoints";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/types";

async function fetch() {
  const { data } = await endpoint.get<Movie>("moviesRandom");
  return data;
}

function useMoviesRandom() {
  return useQuery({
    queryKey: ["moviesRandom"],
    queryFn: fetch,
  });
}

export default useMoviesRandom;
