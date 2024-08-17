/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Registration() {
  const router = useRouter();
  return (
    <div className="bg-white">
      <header className="flex justify-between items-center p-[24px] md:px-[32px] max-w-[3400px] mx-auto border-b-[1px]">
        <Link href={"/"}>
          <img
            src="/images/logo.png"
            alt="Netflix Logo"
            className="w-[89px] h-[24px] lg:w-[148px] lg:h-[40px] "
          />
        </Link>
        <Link
          href={"/client/auth"}
          className="text-xl font-bold hover:underline text-gray-700"
        >
          Sign In
        </Link>
      </header>
      <section className="my-20">
        <div className="flex flex-col items-center gap-5">
          <img src="/images/Devices.png" alt="" className="w-56" />
          <h2 className="text-center text-3xl font-bold text-gray-700">
            Finish setting up your
            <br />
            account
          </h2>
          <p className="text-center">
            Netflix is personalized for you.
            <br />
            Create a password to start watching
            <br />
            Netflix.
          </p>
          <button
            onClick={() => {
              router.push("/client/signup/regform");
            }}
            className="bg-red-600 h-14 w-72 rounded-md text-white text-2xl"
          >
            Next
          </button>
        </div>
      </section>
      <footer className="bg-gray-100 h-52 border-t-0"></footer>
    </div>
  );
}

export default Registration;
