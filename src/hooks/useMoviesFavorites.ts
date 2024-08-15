import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import endpoint from "@/lib/endpoints";
import { Movie, MutationOptions } from "@/types";

async function fetch() {
  const { data } = await endpoint.get<Movie[]>("moviesFavorites");
  return data;
}

export function useMoviesFavorites() {
  return useQuery({
    queryKey: ["moviesFavorites"],
    queryFn: fetch,
  });
}

export const useFavoriteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ movieId }: MutationOptions) => {
      await endpoint.post("moviesFavorites", { movieId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["moviesFavorites"] });
    },
  });
};
