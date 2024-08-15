"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import endpoint from "@/lib/endpoints";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegTimesCircle } from "react-icons/fa";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const [variant, setVariant] = useState("login");
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<Inputs>();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
    clearErrors();
    setError("");
  }, [clearErrors, setError]);

  const onSubmit = handleSubmit(async (data) => {
    if (variant === "login") {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.error) setError(res?.error);
      router.push("/client/profiles");
      router.refresh();
    } else {
      await endpoint
        .post("register", {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .catch(function (error) {
          setError(error.response.data.message);
        });
      setVariant("login");
      router.refresh();
    }
  });

  return (
    <div className="flex justify-center">
      <form
        onSubmit={onSubmit}
        className="bg-black bg-opacity-70 self-center w-full md:px-[68px] md:py-[48px] md:w-[450px]"
      >
        <h1 className="text-white text-[32px] mb-8 font-semibold">
          {variant === "login" ? "Sign in" : "Register"}
        </h1>
        {error && (
          <p className="text-red-500 text-xs pb-2 flex items-center">
            <FaRegTimesCircle size={15} className="mr-1" />
            {error}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <div className="relative">
            <input
              id="email"
              type="email"
              className={`mb-2 rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-black bg-opacity-40 focus:outline-offset-4 peer invalid:border-b-1" ${
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
              <p className="text-red-500 text-xs flex items-center">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>
          {variant === "register" && (
            <div className="relative">
              <input
                id="name"
                type="text"
                className={`mb-2 rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-black bg-opacity-40 focus:outline-offset-4 peer invalid:border-b-1" ${
                  !errors.name
                    ? "border border-gray-400"
                    : "border border-red-600 focus:outline-4"
                } `}
                placeholder=" "
                {...register("name", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                })}
              />
              <label
                htmlFor="name"
                className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Username
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs flex items-center">
                  <FaRegTimesCircle size={15} className="mr-1" />
                  {errors.name.message}
                </p>
              )}
            </div>
          )}
          <div className="relative">
            <input
              id="password"
              type="password"
              className={`mb-2 rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-black bg-opacity-40 focus:outline-offset-4 peer invalid:border-b-1" ${
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
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs flex items-center">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>
          <button className="bg-red-600 py-3 text-white rounded-md w-full hover:bg-red-700 transition">
            {variant === "login" ? "Sign in" : "Sign up"}
          </button>
          {variant === "login" && (
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
          )}
          <p className="text-neutral-500 mt-5 text-sm">
            {variant === "login"
              ? "First time using Netflix?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Login"}
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
