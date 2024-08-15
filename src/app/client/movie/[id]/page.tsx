"use client";
import { useMovieId } from "@/hooks/useMovies";
import { useRouter } from "next/navigation";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Movie({ params }: { params: { id: string } }) {
  const { data: movie, isLoading } = useMovieId(params.id);
  const router = useRouter();

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="h-screen w-screen bg-black">
      {/* <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-2 bg-black bg-opacity-70">
        <FaRegArrowAltCircleLeft
          onClick={() => router.push("/")}
          className="text-white"
        />
        <p className="text-white font-bold text-c">{movie?.title}</p>
      </nav> */}
      <video
        className="h-full w-full"
        autoPlay
        controls
        src={movie?.videoUrl}
      ></video>
    </div>
  );
}

export default Movie;
