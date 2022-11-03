import Image from "next/image"
type TechCardProps = {
  name: string
}

const Technologies = () => {
  const CardItems: string[] = [
    "html5",
    "css3",
    "sass",
    "git",
    "github",
    "javascript",
    "react",
    "typescript",
    "nextjs",
    "nodejs",
    "express",
    "mongodb",
    "figma",
  ]
  return (
    <>
      <div className="w-full pt-10 mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
          {CardItems.map((item, index) => (
            <TechCard name={item} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Technologies

function TechCard({ name }: TechCardProps) {
  return (
    <div className="h-24 md:h-32 lg:h-40 rounded-md bg-buttonBg grid place-items-center cursor-pointer hover:scale-105 duration-200">
      <div className="w-7 h-7 md:h-9 md:w-9 lg:w-12 lg:h-12 relative">
        <Image src={`/images/${name}.svg`} alt={`${name}`} layout="fill" />
      </div>
      <div className="text-white text-base md:text-xl lg:text-2xl xl:text-3xl font-normal tracking-wide capitalize">
        {name}
      </div>
    </div>
  )
}
