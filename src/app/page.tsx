/* eslint-disable @next/next/no-img-element */
"use client";
import HeaderHome from "@/components/navigation/HeaderHome";
import Hero from "@/components/sections/Hero";
import Sections from "@/components/sections/Sections";

function HomePage() {
  return (
    <>
      <div className="relative h-[664px] lg:h-[760px] overflow-hidden">
        <div className="absolute inset-0 image-background bg-no-repeat bg-cover bg-center mx-auto max-w-[120rem] max-h-[63rem]">
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
          <div className="absolute inset-0 gradient-bg"></div>
          <div className="absolute inset-0 z-10">
            <HeaderHome />
            <Hero />
          </div>
        </div>

        <div className="horizontal-1 absolute  bottom-0 h-[100px] w-[140%] max-w-[2304px] left-1/2 transform -translate-x-1/2">
          <div className="horizontal-2 h-full mt-1"></div>
        </div>
      </div>

      {/* <div className="bg-[#232323] h-[8px]"></div> */}
      <Sections />
    </>
  );
}

export default HomePage;
