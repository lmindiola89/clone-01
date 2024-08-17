/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function NotFound() {
  return (
    <div className="relative h-dvh notfound-background bg-no-repeat bg-cover bg-center">
      <header className="bg-black flex justify-between items-center h-[68px] px-[45px]">
        <Link href={"/"}>
          <img
            src="/images/logo.png"
            alt="Netflix Logo"
            className="w-[93px] h-[25px]"
          />
        </Link>
      </header>
      <section className="text-white text-center flex  flex-col justify-center items-center mt-[123px] lg:mt-[90px]">
        <h1 className="text-[40px] lg:text-[65px] font-bold">Lost your way?</h1>
        <p className="w-[222px] lg:w-[636px] lg:text-[24px] mb-5">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.{" "}
        </p>
        <Link href="/">
          <button className="text-black font-bold text-[10px] lg:text-[17px] bg-white w-[97px] h-[26px] lg:w-[158px] lg:h-[43px] rounded-md">
            Netflix Home
          </button>
        </Link>
        <span>
          Error Code
          <strong>NSES-404</strong>
        </span>
      </section>
    </div>
  );
}

export default NotFound;
