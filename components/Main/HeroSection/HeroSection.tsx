import { AboutIcon } from "../icons"
import HeroNav from "./HeroNav"
import HireMeButton from "./HireMeButton"
import ResumeButton from "./ResumeButton"

const HeroSection = () => {
  return (
    <div className="w-full lg:pt-12 flex items-center justify-center flex-col min-h-screen">
      <div className="flex items-center justify-center flex-col w-full">
        {/* text */}
        <div className="relative w-full pb-8 lg:pb-40 mx-auto">
          {/* name */}
          <div className=" font-bold text-cyan font-pop  w-full">
            <p className="font-pop text-lg md:text-xl mb-4 md:mb-6">
              Hi there, {"👋I'm"}
            </p>
            <div className="flex items-center space-x-5 pb-7 font-pop text-text text-3xl sm:text-4xl md:text-[5rem] md:leading-[1.3]">
              <p className=" w-fit">Tochukwu</p>
              <p className="relative text-cyan before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 md:before:h-2 md:before:-bottom-3 before:block before:bg-cyan before:rounded-full">
                John.
              </p>
            </div>
          </div>
          {/* brief about */}
          <div className="w-full mb-6 ">
            <p className="text-text_Light text-3xl sm:text-4xl md:text-6xl font-semibold md:leading-[1.3]">
              I build things for the web
            </p>
          </div>
          {/* brief about info */}
          <div className="max-w-[33.75rem]">
            <p className="text-text_Light text-lg md:text-xl md:leading-[1.3] ">
              {"i'm"} a <span className="text-cyan">software engineer</span>, a
              <span className="text-cyan"> full stack engineer</span> and
              occasionally i design exceptional user experiences. Currently
              {" I'm "}
              focused on the frontend using
              <span className="text-cyan uppercase font-bold">
                {" "}
                mern / t3 stack{" "}
              </span>
              in making the world a better place at{" "}
              <span className="text-cyan bold">XeuxDev</span>.
            </p>
          </div>
          {/* buttons */}
          <div className="flex items-center space-x-5 md:space-x-7 mt-11 md:mt-14 w-full mb-10">
            <HireMeButton />
            <ResumeButton />
          </div>
          {/* btn2 */}
          <div className="flex items-center space-x-3">
            <div className="">
              <HeroNav name="learn about me">
                <AboutIcon height="4" width="4" />
              </HeroNav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
