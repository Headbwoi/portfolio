import type { NextPage } from "next"
import { AboutItems, HeadSection, Technologies } from "../components"

const About: NextPage = () => {
  return (
    <>
      <HeadSection title="Portfolio - About Me" page="About" />
      <main className="relative font-pop  min-h-screen flex items-center justify-center  w-full bg-body overflow-x-hidden py-16 ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0">
          <section className="pt-16 lg:pt-28 pb-14">
            <AboutItems />
          </section>
          {/* technologies */}
          <section className="pt-7 md:pt-10 lg:pt-14">
            {/* heading */}
            <div className="heading text-center mb-4" aria-label="Heading">
              <h2
                className="text-2xl lg:text-4xl font-semibold capitalize text-white tracking-wide mb-4"
                id="heading"
              >
                technologies that i use
              </h2>
              <p className="text-lg text-text">
                Here are some technologies i am using or have used recently
              </p>
            </div>
            {/* techs */}
            <Technologies />
          </section>
        </div>
      </main>
    </>
  )
}

export default About
