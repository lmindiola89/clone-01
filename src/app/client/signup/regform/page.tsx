/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaRegTimesCircle } from "react-icons/fa";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

function Regform() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<Inputs>();

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
  });

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
      <form onSubmit={onSubmit} className="my-10 flex justify-center">
        <div className="flex flex-col gap-2 w-96 lg:w-1/3">
          <h2 className="text-3xl font-bold text-gray-700">
            Create a password to start
            <br />
            your membership
          </h2>
          <p>
            Just a few more steps and you're done!
            <br />
            We hate paperwork, too.
          </p>
          <div className="relative">
            <input
              id="email"
              type="email"
              className={`mb-2 rounded-md px-6 pt-6 pb-1 w-full text-md text-black focus:outline-offset-4 peer invalid:border-b-1" ${
                !errors.email
                  ? "border border-gray-400"
                  : "border border-red-600 focus:outline-4"
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
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs flex items-center">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              id="password"
              type="password"
              className={`mb-2 rounded-md px-6 pt-6 pb-1 w-full text-md text-black focus:outline-offset-4 peer invalid:border-b-1" ${
                !errors.password
                  ? "border border-gray-400"
                  : "border border-red-600 focus:outline-4"
              } `}
              placeholder=" "
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <label
              htmlFor="password"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Add a password
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs flex items-center">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            onClick={() => {
              router.push("/client/signup/regform");
            }}
            className="bg-red-600 h-14 w-full rounded-md text-white text-2xl"
          >
            Next
          </button>
        </div>
      </form>
      <footer className="bg-gray-100 h-52 border-t-0"></footer>
    </div>
  );
}

export default Regform;
