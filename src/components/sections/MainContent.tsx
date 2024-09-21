/* eslint-disable @next/next/no-img-element */
import Accordion from "@/components/sections/Accordion";

function MainContent() {
  return (
    <div className="py-10 bg-black text-white">
      <section className="border-b-2 border-[#232323] px-4 pb-14">
        <div className="flex items-center justify-center flex-col lg:flex-row px-4 md:px-2 mx-auto max-w-7xl">
          {/* left side */}
          <div className="flex-1 text-center lg:text-start">
            <h2 className="text-[32px] lg:text-[48px] font-semibold lg:font-extrabold mb-2">
              Enjoy on your TV
            </h2>
            <p className="text-[18px] lg:text-[24px]">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          {/* right side */}
          <div className="flex-1 relative">
            <img
              src="/images/tv.png"
              alt="Tv image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/images/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="border-b-2 border-[#232323] px-4 pb-14 pt-10">
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row px-4 md:px-2 mx-auto max-w-7xl">
          {/* left side */}
          <div className="flex-1 relative">
            <div className="relative">
              <img
                src="/images/stranger-things-lg.png"
                alt="Stranger Things img"
                className="mt-4"
              />

              <div className="bg-black flex items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2  w-[340px] h-[64px] border-2 border-[#5a5a5a] rounded-xl p-2">
                <img
                  src="/images/stranger-things-sm.png"
                  alt="image"
                  className="h-full"
                />
                <div className=" flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className="text-sm text-blue-500">
                      Downloading...
                    </span>
                  </div>

                  <img
                    src="/images/download-icon.gif"
                    alt=""
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 text-center lg:text-start">
            <h2 className="text-[32px] lg:text-[48px] font-semibold lg:font-extrabold mb-2">
              Download your shows to watch offline
            </h2>
            <p className="text-[18px] lg:text-[24px]">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b-2 border-[#232323] px-4 pb-14 pt-10">
        <div className="flex items-center justify-center flex-col lg:flex-row px-4 md:px-2 mx-auto max-w-7xl">
          {/* left side */}
          <div className="flex-1 text-center lg:text-start">
            <h2 className="text-[32px] lg:text-[48px] font-semibold lg:font-extrabold mb-2">
              Watch everywhere
            </h2>
            <p className="text-[18px] lg:text-[24px]">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          {/* right side */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/images/device-pile.png"
              alt="Device image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10
max-w-[63%]
"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/images/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="border-b-2 border-[#232323] px-4 pb-14 pt-10">
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row px-4 md:px-2 mx-auto max-w-7xl">
          {/* left */}
          <div className="flex-1 relative">
            <img
              src="/images/kids.png"
              alt="Enjoy on your TV"
              className="mt-4"
            />
          </div>
          {/* right */}
          <div className="flex-1 text-center lg:text-start">
            <h2 className="text-[32px] lg:text-[48px] font-semibold lg:font-extrabold mb-2">
              Create profiles for kids
            </h2>
            <p className="text-[18px] lg:text-[24px]">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b-2 border-[#232323] px-2 pb-14">
        <Accordion />
      </section>
    </div>
  );
}

export default MainContent;
