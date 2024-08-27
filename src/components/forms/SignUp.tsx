import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaRegTimesCircle } from "react-icons/fa";
import useEmailStore from "@/hooks/useEmailStore";
import { FaChevronRight } from "react-icons/fa6";
import endpoint from "@/lib/endpoints";

type Inputs = {
  email: string;
};

function SignUp() {
  const { setEmail, email } = useEmailStore();

  const router = useRouter();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    trigger,
  } = useForm<Inputs>({
    mode: "onSubmit",
  });

  const emailValue = watch("email") || "";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailEmpty = emailValue === "";
  const isEmailValid = isValid && !errors.email;

  const handleScroll = () => {
    const scrollPosition = 180;
    if (isEmailEmpty) {
      window.scrollTo({
        top: scrollPosition, // Desplazarse a la posición específica
        behavior: "smooth", // Animación suave
      });
    }
  };

  const onSubmit = handleSubmit(async (data: Inputs) => {
    setEmail(data.email);

    await endpoint
      .post("verifyEmail", {
        email: data.email,
      })
      .then(function (response) {
        router.push("/client/signup/registration");
      })
      .catch(function (error) {
        router.push("/client/auth");
      });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="md:h-[56px] mt-[16px] flex flex-col gap-2 md:flex-row md:justify-between"
    >
      <div className="relative flex-grow">
        <input
          id="email"
          type="email"
          className={`h-[48px] md:h-full w-full rounded-md px-[16px] pt-[20px] pb-1 text-md text-white bg-[#0f0f0f] bg-opacity-60 focus:outline-offset-4 peer invalid:border-b-1 ${
            isEmailValid
              ? "border border-green-600"
              : !isEmailEmpty && errors?.email
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
          className="absolute text-md text-[#bbbbbc] duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        >
          Email address
        </label>
        {!isEmailEmpty && errors?.email && (
          <p className="text-red-500 text-xs flex items-center mt-2">
            <FaRegTimesCircle size={15} className="mr-1" />
            {errors?.email?.message}
          </p>
        )}
      </div>
      <button
        onClick={handleScroll}
        type="submit"
        className="self-center w-[156px] h-[48px] md:h-full bg-[#e50914] rounded text-white text-[18px] transition hover:bg-[#c11119] flex justify-center items-center max-w-[177px]"
      >
        Get Started
        <FaChevronRight className="ml-[10px]" size={20} />
      </button>
    </form>
  );
}

export default SignUp;

{
  /* <div className="flex flex-col gap-4  md:gap-2 md:w-[585px] md:px-[32px] lg:px-0">
 
</div> */
}
