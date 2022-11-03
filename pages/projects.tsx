import { motion } from "framer-motion"
import type { NextPage } from "next"

import React from "react"
import { HeadSection, PageTitle } from "../components"

const Projects: NextPage = () => {
  return (
    <>
      <HeadSection page="Projects" title="Portfolio - Project Page" />
      <main className="relative font-pop  min-h-screen flex items-center justify-center  w-full bg-body overflow-x-hidden py-16 ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0">
          <PageTitle page="My" addon="Projects" />
        </div>
      </main>
    </>
  )
}

export default Projects
