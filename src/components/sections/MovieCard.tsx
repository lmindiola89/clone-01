/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { Movie } from "@/types";
import { FaCirclePlay } from "react-icons/fa6";
import ButtonFavorite from "../ui/ButtonFavorite";

interface Props {
  data: Movie;
}
function MovieCard({ data }: Props) {
  const router = useRouter();
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="Movie"
        draggable={false}
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />
      <div className=" opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          src={data.thumbnailUrl}
          alt="Movie"
          draggable={false}
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <FaCirclePlay
              onClick={() => {
                router.push(`/client/movie/${data.id}`);
              }}
              size={30}
              className="cursor-pointer rounded-full bg-white border-2 hover:bg-neutral-400 hover:border-neutral-400 transition"
            />
            <ButtonFavorite movieId={data.id} />
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
