"use client";
import Navbar from "@/components/navigation/Navbar";
import Billboard from "@/components/sections/Billboard";
import MoviesList from "@/components/sections/MoviesList";
import { useMoviesList } from "@/hooks/useMovies";
import { useMoviesFavorites } from "@/hooks/useMoviesFavorites";
import InfoModal from "@/components/sections/InfoModal";

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  const { data: moviesFavorites = [] } = useMoviesFavorites();

  return (
    <div className="bg-black">
      <InfoModal />
      <Navbar />
      <Billboard />
      <div className="pb-4">
        <MoviesList title="Trending Now" data={movies} />
        <MoviesList title="My List" data={moviesFavorites} />
      </div>
    </div>
  );
}
