"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useMoviesRandom from "@/hooks/useMoviesRandom";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import { IoInformationCircleOutline, IoPlay } from "react-icons/io5";

function Billboard() {
  const router = useRouter();
  const { data } = useMoviesRandom();
  const { openModal } = useInfoModalStore();

  const handleOpenModal = useCallback(() => {
    openModal();
  }, [openModal]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        poster={data?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            onClick={() => {
              router.push(`/client/movie/${data?.id}`);
            }}
            className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
          >
            <IoPlay className="mr-2" size={22} />
            Play
          </button>
          <button
            onClick={handleOpenModal}
            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <IoInformationCircleOutline className="mr-2" size={25} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billboard;