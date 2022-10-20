const HeroSection = () => {
  return (
    <div className="w-full pt-14 lg:mt-0">
      <p className=" text-[6rem] lg:text-[12rem] font-bold text-gray select-none">
        HELLO
      </p>

      <div className="flex items-center justify-center flex-col">
        {/* text */}
        <div className="relative w-full pb-8 lg:pb-0 lg:w-[48.375rem] mx-auto">
          {/* name */}
          <div className=" font-bold text-white text-head-sm md:text-head-lg font-pop flex justify-center space-x-8 pb-7 mb-10 md:mb-14 bg-body/14 text-center">
            <p className="font-pop">{"👋I'm"}</p>
            <p className="font-pop text-cyan relative w-fit before:absolute before:-bottom-6 before:left-0 before:w-full before:h-1 before:block before:bg-cyan before:rounded-full ">
              John
            </p>
          </div>
          {/* brief about */}
          <div className="w-full text-center">
            <p className="text-white text-lg md:text-head-sm md:leading-[4rem]">
              A Full Stack Engineer ,{" "}
              <span className="text-cyan block">
                MERN / T3 Stack Developer,
              </span>{" "}
              UI/UX Designer
            </p>
          </div>
        </div>

        <div className="w-14 h-14 hidden lg:flex"></div>
      </div>
    </div>
  )
}

export default HeroSection
