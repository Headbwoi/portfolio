import type { NextPage } from "next"
import Image from "next/image"
import {
  HeroNav,
  HeroSection,
  AboutIcon,
  ProjectIcon,
  ContactIcon,
  HeadSection,
} from "../components"

const Home: NextPage = () => {
  return (
    <>
      <HeadSection title="My Portfolio - Home Page" page="Home" />

      <main className="relative font-pop bg-body overflow-x-hidden">
        <section className="hero relative h-adj w-full z-20  font-pop">
          <div className="absolute inset-0 -z-10">
            <Image src={"/bg-hero.png"} alt="" layout="fill" priority />
          </div>
          <div className="container px-6 md:px-10 lg:px-5 xl:px-0 relative w-full">
            {/* hero items' */}
            <HeroSection />
          </div>
        </section>
      </main>

      <footer className="relative z-30">
        <div className="w-full h-20 md:h-24 absolute bottom-0 left-1/2 -translate-x-1/2 grid place-items-center">
          <div className="flex items-center justify-center px-6 space-x-10 md:space-x-16 lg:space-x-20">
            {/* about */}
            <HeroNav name="about me">
              <AboutIcon />
            </HeroNav>
            {/* projects */}
            <HeroNav name="projects">
              <ProjectIcon />
            </HeroNav>
            {/* contact */}
            <HeroNav name="contact me">
              <ContactIcon />
            </HeroNav>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
