import Link from "next/link"
import { ContactIcon, Download } from "../icons"

const HeroSection = () => {
  return (
    <div className="w-full pt-[20%] sm:pt-[25%] lg:pt-0 flex items-center justify-start sm:justify-center lg:justify-start flex-col min-h-screen">
      <div className="flex items-center justify-center flex-col w-full">
        {/* text */}
        <div className="relative w-full pb-8 lg:pb-40 lg:w-[48.375rem] mx-auto">
          {/* name */}
          <div className=" font-bold text-cyan font-pop  w-full">
            <p className="font-pop text-xl mb-4 md:mb-6">Hi there, {"👋I'm"}</p>
            <div className="flex items-center md:justify-center space-x-5 pb-7 font-pop text-text text-3xl sm:text-4xl md:text-6xl">
              <p className=" w-fit">Tochukwu</p>
              <p className="relative text-cyan before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:block before:bg-cyan before:rounded-full">
                John.
              </p>
            </div>
          </div>
          {/* brief about */}
          <div className="w-full mb-6">
            <p className="text-text_Light text-3xl sm:text-4xl md:text-6xl md:leading-[4rem] font-semibold">
              I build things for the web
            </p>
          </div>
          <div>
            <p className="text-text_Light text-lg md:leading-[4rem] ">
              {"i'm"} a <span className="text-cyan">software engineer</span>, a
              <span className="text-cyan"> full stack engineer</span> and
              occasionally i design exceptional user experiences. {"I'm "}
              currently focused on the frontend using{" "}
              <span className="text-cyan uppercase font-bold">
                mern / t3 stack
              </span>{" "}
              in making the world a better place at{" "}
              <span className="text-cyan bold">XeuxDev</span>.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-3 md:space-x-5 mt-[20%] lg:mt-[10%] w-full">
            <button
              className={`flex items-center justify-center rounded-md px-3 sm:px-5 w-fit h-11 bg-buttonBg  hover:bg-cyan duration-300 group cursor-pointer`}
            >
              <Link href={`/contactme`}>
                <div className="flex w-full h-full items-center">
                  <span className="text-white text-sm mr-3 group:hover:mr-1 font-semibold capitalize">
                    hire me
                  </span>
                  <div className="h-4 w-4">
                    <ContactIcon height="4" width="4" />
                  </div>
                </div>
              </Link>
            </button>
            <button
              className={`flex items-center justify-center rounded-md px-3 sm:px-5 w-fit h-11 bg-buttonBg  hover:bg-cyan duration-300 group cursor-pointer`}
            >
              <Link href={`/contactme`}>
                <div className="flex w-full h-full items-center">
                  <span className="text-white text-sm mr-3 group:hover:mr-1 font-semibold capitalize">
                    view resume
                  </span>
                  <div className="h-4 w-4">
                    <Download height="4" width="4" />
                  </div>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
