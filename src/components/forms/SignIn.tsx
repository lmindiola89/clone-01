"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegTimesCircle } from "react-icons/fa";
import useEmailStore from "@/hooks/useEmailStore";

type Inputs = {
  email: string;
  password: string;
};

function SignIn() {
  const router = useRouter();
  const { email } = useEmailStore();
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
    trigger,
  } = useForm<Inputs>({
    mode: "onSubmit",
    shouldFocusError: false,
  });

  const onSubmit = async (data: Inputs) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) setError(res?.error);
    router.push("/client/profiles");
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black bg-opacity-70 self-center w-full md:px-[68px] md:py-[48px] md:w-[450px]"
      >
        <h1 className="text-white text-[32px] mb-8 font-semibold">Sign in</h1>
        {error && (
          <p className="text-red-500 text-xs pb-2 flex items-center">
            <FaRegTimesCircle size={15} className="mr-1" />
            {error}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <div className="relative">
            <input
              tabIndex={-1}
              id="email"
              type="email"
              defaultValue={email}
              className={`mb-2 rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-black bg-opacity-40 focus:outline-offset-4 peer invalid:border-b-1 ${
                !errors.email
                  ? "border border-gray-400"
                  : "border border-red-600"
              } `}
              placeholder=" "
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a valid email",
                },
              })}
              onBlur={() => {
                trigger("email");
              }}
              onFocus={() => {
                clearErrors("email");
              }}
            />
            <label
              htmlFor="email"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs flex">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              tabIndex={-1}
              id="password"
              type="password"
              className={`mb-2 rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-black bg-opacity-40 focus:outline-offset-4 peer invalid:border-b-1 ${
                !errors.password
                  ? "border border-gray-400"
                  : "border border-red-600"
              } `}
              placeholder=" "
              {...register("password", {
                required: {
                  value: true,
                  message:
                    "Your password must contain between 4 and 60 characters.",
                },
              })}
              onBlur={() => {
                trigger("password");
              }}
              onFocus={() => {
                clearErrors("password");
              }}
            />
            <label
              htmlFor="password"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs flex">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#e50914] py-3  text-white rounded-md w-full  transition hover:bg-[#c11119]"
          >
            Sign in
          </button>
          <p className="text-neutral-500 mt-5 text-sm">
            New to Netflix?
            <span
              onClick={() => {
                router.push("/");
              }}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              Sign up now.
            </span>
            .
          </p>
          <div className="flex flex-row items-center gap-4 mt-5 justify-center">
            <div
              onClick={() =>
                signIn("google", { callbackUrl: "/client/profiles" })
              }
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FcGoogle size={32} />
            </div>
            <div
              onClick={() =>
                signIn("github", { callbackUrl: "/client/profiles" })
              }
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FaGithub size={32} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
