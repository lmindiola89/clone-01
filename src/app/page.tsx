/* eslint-disable @next/next/no-img-element */
"use client";
import HeaderHome from "@/components/navigation/HeaderHome";
import Hero from "@/components/sections/Hero";
import Sections from "@/components/sections/Sections";

function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden max-w-[120rem] mx-auto">
        <div className="absolute inset-0 image-background bg-no-repeat bg-cover scale-110"></div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
        <div className="absolute inset-0 gradient-bg"></div>
        <HeaderHome />
        <Hero />
      </div>
      <div className="bg-[#232323] h-[8px]"></div>
      <Sections />
    </>
  );
}

export default HomePage;
