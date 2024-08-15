import {
  useFavoriteMutation,
  useMoviesFavorites,
} from "@/hooks/useMoviesFavorites";
import { FaCirclePlus, FaCircleCheck } from "react-icons/fa6";
import { some } from "lodash";

interface Props {
  movieId: string;
}

function ButtonFavorite({ movieId }: Props) {
  const mutation = useFavoriteMutation();
  const { data: moviesFavorites = [] } = useMoviesFavorites();
  const res = some(moviesFavorites, { id: movieId });
  const style =
    "cursor-pointer rounded-full bg-white border-2 hover:bg-neutral-400 hover:border-neutral-400 transition";

  return (
    <div
      onClick={() => {
        mutation.mutate({ movieId });
      }}
    >
      {res === false ? (
        <FaCirclePlus size={30} className={style} />
      ) : (
        <FaCircleCheck size={30} className={style} />
      )}
    </div>
  );
}

export default ButtonFavorite;
