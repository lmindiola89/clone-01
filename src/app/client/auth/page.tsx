/* eslint-disable @next/next/no-img-element */
import SignIn from "@/components/forms/SignIn";
import Link from "next/link";

function Auth() {
  return (
    <>
      <div className="relative bg-red-800 h-screen overflow-hidden">
        <div className="absolute inset-0 image-background bg-cover lg:-mr-[160px]"></div>
        <div className="absolute inset-0 bg-black md:bg-[rgba(0,0,0,0.5)]"></div>
        <header className="relative z-10 flex justify-between items-center p-[24px] md:px-[32px] max-w-[3400px] mx-auto">
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              alt="Netflix Logo"
              className="w-[89px] h-[24px] lg:w-[148px] lg:h-[40px] "
            />
          </Link>
        </header>

        <div className="relative z-10 px-[26px]">
          <SignIn />
        </div>
      </div>
    </>
  );
}

export default Auth;
