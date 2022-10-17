import Image from "next/image"
import ImageWrapper from "../Image/ImageWrapper"
import Desktop from "../Navigation/Desktop"
import Button from "../Utils/Button"

const Header = () => {
  return (
    <header className="pt-6 md:pt-8 lg:pt-0 w-full mb-14">
      <nav className=" h-14 md:h-16 lg:h-[6.25rem] w-full flex items-center justify-between">
        {/* icon */}

        <ImageWrapper
          height="5.25rem"
          width="10.0625rem"
          lgWidth="13.5625rem"
          lgHeight="6.25rem"
          file="icons/logo.svg"
          altText="logo"
        />

        {/* desktop link */}
        <div className="hidden lg:flex">
          <Desktop />
        </div>

        <div className="cta hidden lg:flex">
          <Button />
        </div>

        {/* hamburger */}
        <div className="lg:hidden w-11 h-7 relative">
          <Image
            src={"/icons/hamburger.svg"}
            layout="fill"
            alt="Open Menu Icon"
            aria-label="open mobile menu"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
