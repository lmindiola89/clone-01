import { isEmpty } from "lodash";
import { Movie } from "@/types";
import MovieCard from "./MovieCard";

interface Props {
  data: Movie[];
  title: string;
}

function MoviesList({ data, title }: Props) {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4 pt-4">
          {title}
        </p>
        <div className="grid  gap-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
