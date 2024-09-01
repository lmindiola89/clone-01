import SignUp from "@/components/forms/SignUp";

function Hero() {
  return (
    <div className="px-[32px] pb-[32px] flex justify-center pt-20 lg:pt-36">
      <div className="max-w-[508px]">
        <h1 className=" text-white text-center text-[32px] lg:text-[40px] font-bold leading-none">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-white text-center mt-[16px] text-[16px]">
          Starts at COP 16,900. Cancel anytime.
        </p>
        <h3 className="text-white text-[16px] text-center mt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <SignUp />
      </div>
    </div>
  );
}

export default Hero;
