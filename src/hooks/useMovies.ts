import endpoint from "@/lib/endpoints";
import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import { Movie } from "@/types";

async function fetch() {
  const { data } = await endpoint.get<Movie[]>("movies");
  return data;
}

export function useMoviesList() {
  return useQuery({
    queryKey: ["moviesList"],
    queryFn: fetch,
  });
}

async function fetchId(ctx: QueryFunctionContext) {
  const [, idMovies] = ctx.queryKey;
  const { data } = await endpoint.get<Movie>(`movies/${idMovies}`);
  return data;
}

export function useMovieId(idMovies: string) {
  return useQuery({
    queryKey: ["moviesId", idMovies],
    queryFn: fetchId,
  });
}
