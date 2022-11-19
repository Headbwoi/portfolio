import { motion } from "framer-motion"
import type { NextPage } from "next"

import React from "react"
import { HeadSection, PageTitle, ProjectsCard } from "../components"

const Projects: NextPage = () => {
  return (
    <>
      <HeadSection page="Projects" title="Portfolio - Project Page" />
      <main className="relative font-pop  min-h-screen flex items-center justify-center  w-full bg-body overflow-x-hidden py-16 ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 w-full">
          <PageTitle page="My" addon="Projects" />

          <section className="intro pt-10 lg:pt-20 pb-14">
            <h1 className="text-text text-lg md:text-xl">
              Here are a few of the projects i have done{" "}
            </h1>
          </section>

          <section className="pt-10 flex flex-col space-y-10 lg:space-y-16">
            <ProjectsCard />
          </section>
        </div>
      </main>
    </>
  )
}

export default Projects
