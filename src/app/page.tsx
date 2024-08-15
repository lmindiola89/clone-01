/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaRegTimesCircle } from "react-icons/fa";

type Inputs = {
  email: string;
};

function HomePage() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<Inputs>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    router.push("/client/signup/registration");
  });

  return (
    <>
      <div className="relative h-[480px] md:h-[512px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 image-background bg-no-repeat bg-cover h-full md:bg-center md:scale-125 md:-mt-[64px] lg:-mt-[87.5px]"></div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0">
          <header className="flex justify-between items-center p-[24px] mb-[48.5px] md:mb-[95px] lg:mb-[200px] md:px-[32px] max-w-[3400px] mx-auto">
            <img
              src="/images/logo.png"
              alt="Netflix Logo"
              className="w-[89px] h-[24px] lg:w-[148px] lg:h-[40px] "
            />
            <Link href={"/client/auth"}>
              <button className="text-white bg-[#e50914] rounded w-[75.59px] h-[32px] text-[14px] leading-[14px]">
                Sign In
              </button>
            </Link>
          </header>
          <div className="flex flex-col justify-center mx-[24px] my-[6px]">
            <h1 className=" text-white text-center text-[32px] lg:text-[48px] font-bold lg:font-extrabold leading-none">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white text-center mt-[16px] text-[18px] lg:text-[24px]">
              Watch anywhere. Cancel anytime.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-[24px] mx-[24px] flex flex-col gap-4 items-center"
            >
              <h3 className="text-white text-[18px] lg:text-[20px] text-center">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="flex flex-col justify-center items-center w-full gap-3 md:flex-row md:items-start md:gap-2">
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    className={`h-[48px] md:h-[56px] rounded-md px-6 pt-6 pb-1 w-full lg:w-[371px] text-md text-white bg-black bg-opacity-40 focus:outline-offset-4 peer invalid:border-b-1" ${
                      !errors.email
                        ? "border border-gray-400"
                        : "border border-red-600"
                    } `}
                    placeholder=" "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Email address
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-xs flex items-center mt-2">
                      <FaRegTimesCircle size={15} className="mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button className=" bg-[#e50914] rounded text-white w-[156px] h-[48px]  md:w-[206px] md:h-[56px]">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-10 bg-black text-white">
        <section>
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
            {/* left side */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Enjoy on your TV
              </h2>
              <p className="text-lg md:text-xl">
                Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
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
        <section>
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
            {/* left side */}
            <div className="flex-1 relative">
              <div className="relative">
                <img
                  src="/images/stranger-things-lg.png"
                  alt="Stranger Things img"
                  className="mt-4"
                />

                <div className="bg-black flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-blackw-3/4 w-96 h-24 border-2 border-gray-600 rounded-md p-2">
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

            <div className="flex-1 md:text-left text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
                Download your shows to watch offline
              </h2>
              <p className="text-lg md:text-xl">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
            {/* left side */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Watch everywhere
              </h2>
              <p className="text-lg md:text-xl">
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
        <section>
          <div
            className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row
px-4 md:px-2
"
          >
            {/* left */}
            <div className="flex-1 relative">
              <img
                src="/images/kids.png"
                alt="Enjoy on your TV"
                className="mt-4"
              />
            </div>
            {/* right */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Create profiles for kids
              </h2>
              <p className="text-lg md:text-xl">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-black h-dvh"></footer>
    </>
  );
}

export default HomePage;
