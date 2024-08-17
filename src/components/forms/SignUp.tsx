import { useForm } from "react-hook-form";
import { FaRegTimesCircle } from "react-icons/fa";

type Inputs = {
  email: string;
};

function SignUp() {
  const {
    register,
    formState: { errors, isSubmitted, isValid },
    handleSubmit,
    watch,
  } = useForm<Inputs>();

  const emailValue = watch("email") || "";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };

  const isEmailEmpty = emailValue === "";
  const isEmailValid = isValid && !errors.email;

  const scrollPosition = 180;

  const handleScroll = () => {
    if (isEmailEmpty) {
      window.scrollTo({
        top: scrollPosition, // Desplazarse a la posición específica
        behavior: "smooth", // Animación suave
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[24px] mx-[24px] flex flex-col gap-4 items-center"
    >
      <h3 className="text-white text-[18px] lg:text-[20px] text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-2 md:w-[585px]">
        <div className="relative md:flex-grow ">
          <input
            id="email"
            type="email"
            className={`w-full h-[48px] md:h-[56px] rounded-md px-6 pt-6 pb-1 text-md text-white bg-black bg-opacity-40 focus:outline-offset-4 peer invalid:border-b-1 ${
              isSubmitted && isEmailValid
                ? "border border-green-600"
                : isSubmitted && !isEmailEmpty && errors?.email
                ? "border border-red-600"
                : "border border-gray-400"
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
          />
          <label
            htmlFor="email"
            className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            Email address
          </label>
          {isSubmitted && !isEmailEmpty && errors?.email && (
            <p className="text-red-500 text-xs flex items-center mt-2">
              <FaRegTimesCircle size={15} className="mr-1" />
              {errors?.email?.message}
            </p>
          )}
        </div>
        <button
          onClick={handleScroll}
          type="submit"
          className="bg-[#e50914] rounded text-white w-[156px] h-[48px]  md:w-[206px] md:h-[56px] self-start"
        >
          Get Started
        </button>
      </div>
    </form>
  );
}

export default SignUp;

// router.push("/client/signup/registration");
