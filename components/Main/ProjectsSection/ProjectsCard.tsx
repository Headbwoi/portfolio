import Image from "next/image"
import Link from "next/link"
import Github from "../../Utils/icons/Github"
import LiveLink from "./icon/LiveLink"

export type ProjectCardprops = {
  image: string
  name: string
  about: string
  link: string
  liveLink: string
  builtWith: string[]
  orientation: number
}

const ProjectsCard = ({
  about,
  image,
  link,
  name,
  liveLink,
  builtWith,
  orientation,
}: ProjectCardprops) => {
  return (
    <div className="w-full shadow-2xl lg:shadow-none">
      <div className="max-w-5xl relative h-[30rem] lg:h-[22rem] xl:h-[28rem] flex flex-col overflow-hidden">
        {/* image */}
        <div
          className={`absolute inset-0 w-[20rem] h-[30rem] lg:top-1/2 lg:-translate-y-1/2 flex lg:items-start flex-col `}
        >
          <Link href={`${liveLink}`}>
            <a
              className={`min-w-[20rem] w-[37rem] lg:w-[42rem] h-[30rem] lg:h-[22rem] xl:h-[28rem] absolute  rounded-md overflow-hidden duration-300 cursor-pointer opacity-[0.15] lg:opacity-25 hover:opacity-50 ${
                orientation === 1 ? "lg:left-0" : "lg:left-full"
              }`}
            >
              <Image
                src={`/${image}`}
                alt={`${name} image`}
                layout="fill"
                priority
              />
            </a>
          </Link>
        </div>

        {/* text */}
        <div
          className={`${
            orientation === 1
              ? "absolute top-1/2 right-0 -translate-y-1/2 max-w-xl px-6 py-8 lg:p-0 flex lg:items-end flex-col w-full"
              : "absolute top-1/2 left-0 -translate-y-1/2 max-w-xl px-6 py-8 lg:p-0 flex lg:items-start flex-col w-full"
          }`}
        >
          <Link href={`${link}`}>
            <a className="text-white text-xl lg:text-2xl font-bold mb-4 tracking-wider capitalize cursor-pointer select-none">
              {name}
            </a>
          </Link>
          <div className="md:bg-gray/80 text-white text-sm lg:text-base py-5 lg:px-7 lg:py-7 font-normal mb-4 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
            {about}
          </div>
          <div className="flex flex-wrap items-center space-x-4 text-cyan text-sm lg:text-base font-normal select-none capitalize">
            {builtWith.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="pt-5 pb-2 space-x-4 flex items-center">
            <Link href={`${link}`}>
              <a>
                <Github />
              </a>
            </Link>
            <Link href={`${liveLink}`}>
              <a>
                <LiveLink />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
