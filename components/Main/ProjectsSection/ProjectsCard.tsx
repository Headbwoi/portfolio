import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Github from "../../Utils/icons/Github"

type ProjectCardprops = {
  image?: string
  name?: string
  about?: string
  link?: string
}

const ProjectsCard = ({}: ProjectCardprops) => {
  const [orientation, setOrientation] = useState<number | undefined>()
  const [screenSize, setScreenSize] = useState<number>()

  const handleScreenSize = () => {
    const screensize = window.screen.width
    setScreenSize(screensize)
  }
  useEffect(() => {
    const randNum = Math.floor(Math.random() * 2)
    window.addEventListener("resize", handleScreenSize)

    return () => {
      setOrientation(randNum)
      window.removeEventListener("resize", handleScreenSize)
    }
  }, [])

  return (
    <div className="w-full mx-auto">
      <div className="w-full relative min-h-[25rem] lg:h-[22rem] xl:h-[25rem] flex flex-col">
        {/* image */}
        <div
          className={`${
            //@ts-ignore
            screenSize < 768 ? "absolute inset-0 w-full h-full" : "kddj"
          } ${
            orientation === 1
              ? "absolute top-1/2 left-0 -translate-y-1/2 max-w-xl flex lg:items-start flex-col"
              : orientation === 0
              ? "absolute top-1/2 right-0 -translate-y-1/2 max-w-xl flex lg:items-end flex-col"
              : ""
          }`}
        >
          <div className="min-w-full md:w-[37rem] min-h-[25rem] lg:h-[22rem] xl:h-[25rem] relative rounded-md overflow-hidden opacity-20 w-full">
            <Image src={"/projects/crowdo-app.png"} alt="" layout="fill" />
          </div>
        </div>
        {/* text */}
        <div
          className={`${
            orientation === 1
              ? "absolute top-1/2 right-0 -translate-y-1/2 max-w-xl p-6 lg:p-0 flex lg:items-end flex-col w-full"
              : "absolute top-1/2 left-0 -translate-y-1/2 max-w-xl p-6 lg:p-0 flex lg:items-start flex-col w-full"
          }`}
        >
          <div className="text-cyan text-base lg:text-lg mb-3">
            Featured Project
          </div>
          <div className="text-white text-xl lg:text-2xl font-bold mb-4 tracking-wider capitalize">
            Crowdo App
          </div>
          <div className="md:bg-veryDark/50 text-white text-lg py-5 lg:px-7 lg:py-7 font-normal mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            ea repudiandae harum reiciendis inventore officiis corporis
            voluptatibus quam dignissimos sed?
          </div>
          <div className="flex flex-wrap space-x-4 text-cyan text-lg font-normal">
            <span>vs code</span>
            <span>react</span>
            <span>node</span>
            <span>tailwindcss</span>
          </div>
          <div className="py-5 space-x-4">
            <Link href={"https://github.com/Headbwoi"}>
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
