import Image from "next/image"
const HeroImage = () => {
  return (
    <div className="w-[13.875rem] h-[13.875rem] md:w-[20.625rem] md:h-[20.625rem] bg-cyan rounded-3xl relative rotate-45 lg:mt-32 overflow-x-hidden">
      <div className="absolute w-[14.875rem] h-[14.875rem] lg:w-[20.625rem] lg:h-[20.625rem] top-[45%] left-1/2 -rotate-45">
        <Image src={"/me.jpg"} layout="fill" alt="Profile" />
      </div>
    </div>
  )
}

export default HeroImage
