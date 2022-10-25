const HeroSection = () => {
  return (
    <div className="w-full pt-[20%] sm:pt-[40%] lg:pt-0 flex items-center justify-start sm:justify-center lg:justify-start flex-col min-h-[30rem] md:min-h-[40rem] xl:min-h-[40rem]">
      <p className=" text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-gray select-none">
        HELLO
      </p>

      <div className="flex items-center justify-center flex-col w-full">
        {/* text */}
        <div className="relative w-full pb-8 lg:pb-40 lg:w-[48.375rem] mx-auto">
          {/* name */}
          <div className=" font-bold text-cyan font-pop md:text-center w-full">
            <p className="font-pop text-3xl mb-4 md:mb-6">{"👋I'm"}</p>
            <div className="flex items-center md:justify-center space-x-5 pb-7 mb-10 md:mb-14 font-pop text-text text-head-sm md:text-head-lg">
              <p className=" w-fit">Tochukwu</p>
              <p className="relative text-cyan before:absolute before:-bottom-4 before:left-0 before:w-full before:h-1 before:block before:bg-cyan before:rounded-full">
                John
              </p>
            </div>
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
      </div>
    </div>
  )
}

export default HeroSection
