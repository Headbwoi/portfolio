const HeroSection = () => {
  return (
    <div className="w-full">
      <p className=" text-[6rem] lg:text-[12rem] font-bold text-gray md:-mt-16">
        HELLO
      </p>

      <div className="flex items-center justify-center space-x-20 flex-col lg:flex-row">
        {/* text */}
        <div className="relative w-full pb-8 lg:pb-0 lg:w-[28.375rem]">
          {/* name */}
          <div className=" font-bold text-white text-head-sm lg:text-head-lg font-pop flex justify-center space-x-6 pb-4 md:pb-7 mb-4 md:mb-5 bg-body/14 text-center">
            <p className="font-pop">{"👋I'm"}</p>
            <p className="font-pop text-cyan relative w-fit before:absolute before:-bottom-6 before:left-0 before:w-full before:h-1 before:block before:bg-cyan before:rounded-full ">
              John
            </p>
          </div>
          {/* brief about */}
          <div className="w-full text-center">
            <p className="text-white text-lg md:text-lg">
              Full Stack Engineer, UI/UX designer, MERN / T3 stack developer,
              Automation Engineer
            </p>
          </div>
        </div>

        <div className="w-14 h-14 hidden lg:flex"></div>
      </div>
    </div>
  )
}

export default HeroSection
