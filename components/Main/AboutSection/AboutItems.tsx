import Image from "next/image"
import React from "react"

const AboutItems = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center flex-col lg:flex-row  lg:space-x-10 ">
        {/* text */}
        <div className="text lg:flex-[45%]">
          <h1 className="font-normal text-white text-xl lg:text-2xl font-pop flex items-start space-x-2 lg:space-x-3 mb-6">
            <p>Hi{"👋, "} I am</p>
            <p className="font-pop text-cyan relative w-fit font-semibold">
              Tochukwu John,
            </p>
          </h1>
          {/* info */}
          <div className="mb-10 md:mb-12 lg:mb-0">
            <p className="font-normal text-lg text-text lg:text-xl mb-6">
              A first year computer science student, a{" "}
              <span className="text-cyan">self-taught </span>
              Front-end Developer transitioning to Full-Stack Development with a
              passion and love for coding and solving problems that impact the
              lives of people. I can develop modern responsive websites from
              scratch and build them into user-friendly and accessible web
              experiences for your users.
            </p>
            <p className="font-normal text-lg text-text lg:text-xl mb-6">
              Transformng my creatvity and knowledge into websites have been my
              passion for months now. During this time, I have helped various
              clients establish their presence online. I also love learning new
              technologies and frameworks.
            </p>
            <p className="font-normal text-lg text-text lg:text-xl mb-6">
              Additionally, i am a lover of open source softwares.
            </p>
          </div>
        </div>
        {/* images/illustrsions */}
        <div className="lg:flex-[40%] w-full md:max-w-md relative cursor-pointer group">
          <div className="w-[95%] h-96 lg:h-[30rem] xl:h-[34rem] relative rounded-md overflow-hidden border-2 border-cyan backdrop-blur-sm bg-cyan/20 z-20 ">
            <div className="grayscale group-hover:grayscale-0 duration-500 w-full h-full relative">
              <Image
                src={"/me.png"}
                alt="moi"
                priority={true}
                layout="fill"
                quality={100}
                placeholder={"blur"}
                blurDataURL={"/me_small.png"}
              />
            </div>
          </div>
          <div className="absolute h-96 lg:h-[30rem] xl:h-[34rem] w-full top-5 left-4 border-2 border-body z-10 bg-buttonBg rounded-md group-hover:top-4 group-hover:left-3 duration-500"></div>
        </div>
      </div>
    </>
  )
}

export default AboutItems
