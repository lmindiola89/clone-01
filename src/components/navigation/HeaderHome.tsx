/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function HeaderHome() {
  return (
    <header className="flex justify-between items-center p-[24px] md:px-[32px] lg:px-[80px] max-w-[1282px] mx-auto h-[80px]">
      <img
        src="/images/logo.png"
        alt="Netflix Logo"
        className="w-[89px] h-[24px] lg:w-[148px] lg:h-[40px]"
      />
      <Link href={"/client/auth"}>
        <button className="text-white bg-[#e50914] rounded w-[75.59px] h-[32px] text-[14px] leading-[14px] transition hover:bg-[#c11119]">
          Sign In
        </button>
      </Link>
    </header>
  );
}

export default HeaderHome;
