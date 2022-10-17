import Image from "next/image"

const Header = () => {
  return (
    <header className="pt-6 md:pt-8 lg:pt-0 w-full ">
      <nav className="border border-white h-14 md:h-16 lg:h-[6.25rem] w-full flex items-center justify-between">
        <div className="w-[7.0625rem] h-[3.25rem] lg:w-[13.5625rem] lg:h-[6.25rem] relative">
          <Image src={"/icons/logo.svg"} layout="fill" alt="logo" />
        </div>
      </nav>
    </header>
  )
}

export default Header

