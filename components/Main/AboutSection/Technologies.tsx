import Image from "next/image"
type TechCardProps = {
  name: string
}

const Technologies = () => {
  const CardItems: string[] = [
    "html5",
    "css3",
    "javascript",
    "sass",
    "react",
    "nodejs",
    "express",
    "mongodb",
    "nextjs",
    "git",
    "github",
  ]
  return (
    <>
      <div className="w-full">
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
    <div className="h-24 w-24 rounded-md bg-buttonBg grid place-items-center">
      <div className="w-7 h-7 relative">
        <Image src={`/images/${name}.svg`} alt={`${name}`} layout="fill" />
      </div>
      <div className="text-white text-base font-bold tracking-wide">{name}</div>
    </div>
  )
}
