import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Github from "../../Utils/icons/Github"

export type ProjectCardprops = {
  image: string
  name: string
  about: string
  link: string
  liveLink: string
  builtWith: string[]
}

const ProjectsCard = ({
  about,
  image,
  link,
  name,
  liveLink,
  builtWith,
}: ProjectCardprops) => {
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
      <div className="w-full relative h-[32rem] lg:h-[22rem] xl:h-[25rem] flex flex-col">
        {/* image */}
        <div
          className={`${
            //@ts-ignore
            screenSize < 768 ? "absolute inset-0 w-full h-full" : ""
          } ${
            orientation === 1
              ? "absolute top-1/2 left-0 -translate-y-1/2 max-w-xl flex lg:items-start flex-col h-full w-full"
              : orientation === 0
              ? "absolute top-1/2 right-0 -translate-y-1/2 max-w-xl flex lg:items-end flex-col h-full w-full"
              : ""
          }`}
        >
          <Link href={`${liveLink}`}>
            <a className="min-w-full md:w-[37rem] lg:w-[40rem] h-[32rem] lg:h-[22rem] xl:h-[25rem] relative rounded-md overflow-hidden duration-300 cursor-pointern opacity-5 lg:opacity-25 hover:opacity-50">
              <Image src={`/${image}`} alt={`${name} image`} layout="fill" />
            </a>
          </Link>
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
          <Link href={`${link}`}>
            <a className="text-white text-xl lg:text-2xl font-bold mb-4 tracking-wider capitalize cursor-pointer select-none">
              {name}
            </a>
          </Link>
          <div className="md:bg-veryDark/70 text-white text-sm lg:text-base py-5 lg:px-7 lg:py-7 font-normal mb-4">
            {about}
          </div>
          <div className="flex flex-wrap items-center space-x-4 text-cyan text-sm lg:text-base font-normal select-none capitalize">
            {builtWith.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="py-5 space-x-4">
            <Link href={`${link}`}>
              <a>
                <Github />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
