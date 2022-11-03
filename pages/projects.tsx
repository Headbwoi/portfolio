import { motion } from "framer-motion"
import type { NextPage } from "next"

import React from "react"
import { HeadSection } from "../components"

const Projects: NextPage = () => {
  return (
    <>
      <HeadSection page="Projects" title="Portfolio - Project Page" />
      <main className="relative font-pop  min-h-screen flex items-center justify-center  w-full bg-body overflow-x-hidden py-16 "></main>
    </>
  )
}

export default Projects
