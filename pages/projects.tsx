import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { NextPage } from "next"
import { ProjectCardprops } from "../components/Main/ProjectsSection/ProjectsCard"

import React from "react"
import { HeadSection, PageTitle, ProjectsCard } from "../components"

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<[]>()
  const URL =
    process.env.NODE_ENV === "production"
      ? "https://xeuxdev.vercel.app/data/projects.json"
      : "http://localhost:3000/data/projects.json"
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(URL)
      const response = await data.json()
      setProjects(response)
    }
    return () => {
      getData()
    }
  }, [URL])

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

          <section className="pt-10 flex flex-col space-y-10 lg:space-y-24 xl:space-y-32">
            {projects?.map((item: ProjectCardprops, index) => (
              <ProjectsCard
                key={index}
                name={item.name}
                image={item.image}
                link={item.link}
                about={item.about}
                builtWith={item.builtWith}
                liveLink={item.liveLink}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

export default Projects
