import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeadSection } from "../components"

const About: NextPage = () => {
  return (
    <>
      <HeadSection title="Portfolio - About Me" page="About" />
      <main className="relative font-pop bg-body overflow-x-hidden py-16 ">
        <section className="hero relative min-h-screen flex items-center justify-center pt-16 lg:pt-28 pb-14 w-full font-pop">
          <div className="container px-6 md:px-10 lg:px-0">
            {/* about items' */}
            <div className="flex items-center justify-center flex-col lg:flex-row  lg:space-x-10 ">
              {/* text */}
              <div className="text lg:flex-[45%]">
                <div className=" font-normal text-white text-xl font-pop flex items-start space-x-2 lg:space-x-3 mb-6">
                  <p>Hi{"👋, "} I am</p>
                  <p className="font-pop text-cyan relative w-fit font-semibold">
                    Tochukwu John
                  </p>
                </div>
                <div className="mb-10 md:mb-12 lg:mb-0">
                  <p className="font-normal text-xl text-text lg:text-2x mb-6">
                    A first year computer science student, a self-taught
                    Front-end Developer transitioning to Full-Stack Development
                    with a passion and love for coding and solving problems that
                    impact the lives of people. I can develop modern responsive
                    websites from scratch and build them into user-friendly and
                    accessible web experiences for your users.
                  </p>
                  <p className="font-normal text-xl text-text lg:text-2x mb-6">
                    Transformng my creatvity and knowledge into websites have
                    been my passion for months now. During this time, I have
                    helped various clients establish their presence online. I
                    also love learning new technologies and frameworks.
                  </p>
                  <p className="font-normal text-xl text-text lg:text-2x mb-6">
                    Additionally, i am a lover of open source softwares.
                  </p>
                </div>
              </div>
              {/* images/illustrsions */}
              <div className="lg:flex-[40%] w-full relative">
                <div className="w-[95%] h-96 lg:h-[32rem] relative rounded-md overflow-hidden border-2 border-cyan backdrop-blur-sm bg-cyan/20 z-20">
                  <Image
                    src={"/me_black.png"}
                    alt="moi"
                    layout="fill"
                    priority
                  />
                </div>
                <div className="absolute h-96 lg:h-[32rem] w-full top-5 left-5 border-2 border-body z-10 bg-buttonBg rounded-md"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
