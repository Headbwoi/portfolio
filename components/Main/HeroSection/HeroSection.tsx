const HeroSection = () => {
  return (
    <div className="w-full">
      <p className="absolute left-1/2 -translate-x-1/2 z-10 text-[6rem] lg:text-[12rem] font-bold text-gray md:-mt-16">
        HELLO
      </p>

      <div className="flex items-center justify-center space-x-20 flex-col lg:flex-row">
        {/* text */}
        <div className="relative z-20 mt-20 md:mt-36 w-full pb-8 lg:pb-0 lg:w-[28.375rem]">
          {/* name */}
          <div className=" font-bold text-white text-head-sm lg:text-head-lg font-pop flex flex-col space-y-8 lg:space-y-12 relative pb-4 md:pb-7 mb-4 md:mb-5 text-center">
            <p className="font-pop">{"I'm"}</p>
            <p className="font-pop">
              Tochukwu <span className="text-cyan">John</span>
            </p>
            <span className="absolute bottom-0 left-0 w-[8.75rem] md:w-48 h-1 block bg-cyan rounded-full "></span>
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
