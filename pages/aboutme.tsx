import type { NextPage } from "next"
import Image from "next/image"
import { HeadSection } from "../components"

const About: NextPage = () => {
  return (
    <>
      <HeadSection title="Portfolio - About Me" page="About" />
      <main className="relative font-pop bg-body overflow-x-hidden">
        <section className="hero relative min-h-screen w-full font-pop">
          <div className="container px-6 md:px-10 lg:px-5 xl:px-0">
            {/* about items' */}
            <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-between">
              {/* text */}
              <div className="text">
                Hi, im tochukwu john, a frontend developer, backend developer,
                full stack developer working with Tailwindcss, reactjs/ Nextjs,
                Nodejs and ExpressJs, MongoDb with a little dabbing into
                PostgreSql and databases in general. ilove solving problems as
                youll see in the projects page.im a very valuable person to any
                team as i bring my unique experiences to the team . im the guy
                that brings the cheer into a bad situation with a sight for
                solving problems effectively and efficiently to the best of the
                customenrs/clients satisfaction
              </div>
              {/* images/illustrsions */}
              <div className="w-full h-96 relative">
                <Image src={"/me.jpg"} alt="moi" layout="fill" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
