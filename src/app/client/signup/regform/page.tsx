/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import endpoint from "@/lib/endpoints";
import Link from "next/link";
import useEmailStore from "@/hooks/useEmailStore";
import { ClipLoader } from "react-spinners";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

function Regform() {
  const { email } = useEmailStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    trigger,
    watch,
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const watchEmail = watch("email") || email;
  const watchPassword = watch("password") || "";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = !errors.email && emailRegex.test(watchEmail);
  const isPasswordValid = !errors.password && watchPassword.length >= 6;

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    await endpoint
      .post("register", {
        email: data.email,
        name: data.name,
        password: data.password,
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          router.push("/client/auth");
        }
      })
      .catch(function (error) {
        setError(error.response.data.message);
      });
    setLoading(false);
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
          className="text-xl font-bold hover:underline text-black"
        >
          Sign In
        </Link>
      </header>
      <form onSubmit={onSubmit} className="my-10 flex justify-center px-[32px]">
        <div className="flex flex-col gap-2 w-96 lg:w-1/3">
          <h2 className="text-3xl font-bold text-black">
            Create a password to start
            <br />
            your membership
          </h2>
          <p>
            Just a few more steps and you're done!
            <br />
            We hate paperwork, too.
          </p>
          {error && (
            <p className="text-red-500 text-xs pb-2 flex items-center">
              <FaRegTimesCircle size={15} className="mr-1" />
              {error}
            </p>
          )}
          <div className="relative md:flex-grow ">
            <input
              id="email"
              type="email"
              defaultValue={email}
              className={`w-full h-[48px] md:h-[56px] rounded-md px-6 pt-6 pb-1 text-md text-black focus:outline-offset-4 peer invalid:border-b-1 ${
                isEmailValid
                  ? "border border-green-600"
                  : errors?.email
                  ? "border border-red-600"
                  : "border border-[#63615e]"
              }`}
              placeholder=" "
              {...register("email", {
                validate: {
                  required: (value) => {
                    if (value.length < 5) {
                      return "Email is required";
                    }
                    if (!emailRegex.test(value)) {
                      return "Please enter a valid email address.";
                    }
                    return true;
                  },
                },
              })}
              onBlur={() => {
                trigger("email");
              }}
            />
            <label
              htmlFor="email"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Email address
            </label>
            {errors?.email && (
              <p className="text-red-500 text-xs flex items-center mt-2">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors?.email?.message}
              </p>
            )}
          </div>

          <div className="relative md:flex-grow ">
            <input
              id="name"
              type="text"
              className={`w-full h-[48px] md:h-[56px] rounded-md px-6 pt-6 pb-1 text-md text-black focus:outline-offset-4 peer invalid:border-b-1 ${
                isPasswordValid
                  ? "border border-green-600"
                  : errors?.name
                  ? "border border-red-600"
                  : "border border-[#63615e]"
              }`}
              placeholder=" "
              {...register("name", {
                validate: {
                  required: (value) => {
                    if (value.length < 1) {
                      return "Username  is required";
                    }
                    if (value.length < 5) {
                      return "Username should be between 6 and 50 characters.";
                    }
                    return true;
                  },
                },
              })}
              onBlur={() => {
                trigger("name");
              }}
            />
            <label
              htmlFor="name"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Username
            </label>
            {errors?.name && (
              <p className="text-red-500 text-xs flex items-center mt-2">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors?.name?.message}
              </p>
            )}
          </div>

          <div className="relative md:flex-grow ">
            <input
              id="password"
              type="password"
              className={`w-full h-[48px] md:h-[56px] rounded-md px-6 pt-6 pb-1 text-md text-black focus:outline-offset-4 peer invalid:border-b-1 ${
                isPasswordValid
                  ? "border border-green-600"
                  : errors?.password
                  ? "border border-red-600"
                  : "border border-[#63615e]"
              }`}
              placeholder=" "
              {...register("password", {
                validate: {
                  required: (value) => {
                    if (value.length < 1) {
                      return "Password is required";
                    }
                    if (value.length < 5) {
                      return "Password should be between 6 and 60 characters.";
                    }
                    return true;
                  },
                },
              })}
              onBlur={() => {
                trigger("password");
              }}
            />
            <label
              htmlFor="password"
              className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Add a password
            </label>
            {errors?.password && (
              <p className="text-red-500 text-xs flex items-center mt-2">
                <FaRegTimesCircle size={15} className="mr-1" />
                {errors?.password?.message}
              </p>
            )}
          </div>

          <button className="bg-red-600 h-14 w-full rounded-md text-white text-2xl">
            {loading ? <ClipLoader size={20} color="#fff" /> : "Next"}
          </button>
        </div>
      </form>
      <footer className="bg-gray-100 h-52 border-t-0"></footer>
    </div>
  );
}

export default Regform;
