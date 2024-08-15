/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaRegTimesCircle } from "react-icons/fa";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

function Regform() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<Inputs>();

  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
  });

  const router = useRouter();
  return (
    <div className="bg-white">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 pb-10 pt-6 border-b-2">
        <Link href={"/"}>
          <img
            src="/images/logo.png"
            alt="Netflix Logo"
            className="w-28 lg:w-36"
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
