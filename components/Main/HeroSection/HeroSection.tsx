import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="w-full pt-[20%] sm:pt-[25%] lg:pt-0 flex items-center justify-start sm:justify-center lg:justify-start flex-col min-h-screen">
      <div className="flex items-center justify-center flex-col w-full">
        {/* text */}
        <div className="relative w-full pb-8 lg:pb-40 lg:w-[48.375rem] mx-auto">
          {/* name */}
          <div className=" font-bold text-cyan font-pop  w-full">
            <p className="font-pop text-3xl mb-4 md:mb-6">
              Hi there, {"👋I'm"}
            </p>
            <div className="flex items-center md:justify-center space-x-5 pb-7 mb-6 md:mb-14 font-pop text-text text-head-sm md:text-head-lg">
              <p className=" w-fit">Tochukwu</p>
              <p className="relative text-cyan before:absolute before:-bottom-4 before:left-0 before:w-full before:h-1 before:block before:bg-cyan before:rounded-full">
                John.
              </p>
            </div>
          </div>
          {/* brief about */}
          <div className="w-full text-center">
            <p className="text-text text-lg md:text-head-sm md:leading-[4rem] capitalize">
              A Full Stack Engineer ,{" "}
              <span className="text-cyan block">
                MERN / T3 Stack Developer,
              </span>{" "}
              Building things for the web
            </p>
          </div>
          <div>
            <button
              className={`rounded-md w-[7rem] h-11 bg-buttonBg flex items-center justify-center hover:bg-cyan duration-300 group cursor-pointer mx-auto mt-[10%] sm:mt-[20%] lg:mt-[10%]`}
            >
              <Link href={`/contactme`}>
                <span className="text-white text-base mr-3 group:hover:mr-1 font-semibold">
                  Hire Me
                </span>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-text group-hover:text-white w-4 h-4"
              >
                <path
                  d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
