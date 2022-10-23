import type { NextPage } from "next"
import Image from "next/image"
import { HeadSection } from "../components"

const About: NextPage = () => {
  return (
    <>
      <HeadSection title="Portfolio - About Me" page="About" />
      <main className="relative font-pop bg-body overflow-x-hidden pt-16">
        <section className="hero relative min-h-screen w-full font-pop">
          <div className="container px-6 md:px-10 lg:px-5 xl:px-0">
            {/* about items' */}
            <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:space-x-10">
              {/* text */}
              <div className="text lg:flex-[45%]">
                <div className=" font-bold text-white text-head-sm md:text-head-lg font-pop flex  flex-col items-start space-y-6 lg:space-y-10 pb-7 mb-10 md:mb-14 bg-body/14 text-center">
                  <p className="font-pop">{"Hi👋, I'm"}</p>

                  <p className="font-pop text-cyan relative w-fit before:absolute before:-bottom-6 before:left-0 before:w-full before:h-1 before:block before:bg-cyan before:rounded-full ">
                    Tochukwu John
                  </p>
                </div>
                <div className="text-xl text-text lg:text-2xl ">
                  A frontend developer, backend developer, full stack developer
                  working with Tailwindcss, reactjs/ Nextjs, Nodejs and
                  ExpressJs, MongoDb with a little dabbing into PostgreSql and
                  databases in general. ilove solving problems as youll see in
                  the projects page.im a very valuable person to any team as i
                  bring my unique experiences to the team . im the guy that
                  brings the cheer into a bad situation with a sight for solving
                  problems effectively and efficiently to the best of the
                  customenrs/clients satisfaction.
                </div>
              </div>
              {/* images/illustrsions */}
              <div className="lg:flex-[40%]">
                <div className="w-full h-96 relative ">
                  <Image src={"/me.jpg"} alt="moi" layout="fill" />
                </div>
              </div>
            </div>
          </div>
          s
        </section>
      </main>
    </>
  )
}

export default About
