import { useCallback } from "react";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMoviesRandom from "@/hooks/useMoviesRandom";
import ButtonFavorite from "../ui/ButtonFavorite";
import { FaCirclePlay, FaCircleXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function InfoModal() {
  const { closeModal, isOpen } = useInfoModalStore();
  const { data } = useMoviesRandom();
  const router = useRouter();

  const handleClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  if (isOpen === false) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative max-w-2xl rounded-md overflow-hidden">
        <div className="transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md">
          <div className="relative h-80">
            <video
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              loop
              // src={data?.videoUrl}
              className="w-full brightness-[60%] object-cover h-full"
            />
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 rounded-full bg-white border-2 hover:bg-neutral-400 hover:border-neutral-400 transition"
            >
              <FaCircleXmark size={30} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <FaCirclePlay
                  onClick={() => {
                    router.push(`/client/movie/${data?.id}`);
                  }}
                  size={30}
                  className="cursor-pointer rounded-full bg-white border-2 hover:bg-neutral-400 hover:border-neutral-400 transition"
                />
                <ButtonFavorite movieId={data?.id || ""} />
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <div className="flex flex-row items-center gap-2 mb-4">
              <p className="text-green-400 font-semibold text-lg">New</p>
              <p className="text-white text-lg">{data?.duration}</p>
              <p className="text-white text-lg">{data?.genre}</p>
            </div>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
