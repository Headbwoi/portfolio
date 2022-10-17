import Image from "next/image"
import { useState } from "react"
import { Desktop, Mobile } from "../Navigation/index"
import Button from "../Utils/Button"
import { AnimatePresence } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => {
    isOpen ? setIsOpen((prev) => !prev) : setIsOpen((prev) => !prev)
  }
  return (
    <header className="pt-6 md:pt-8 lg:pt-0 w-full mb-14">
      <nav className=" h-14 md:h-16 lg:h-[6.25rem] w-full flex items-center justify-between">
        {/* icon */}
        <div className="w-[10.0625rem] h-[5.25rem] lg:w-[13.5625rem] lg:h-[6.25rem] relative">
          <Image
            src={"/icons/logo.svg"}
            layout="fill"
            alt="logo"
            priority={true}
          />
        </div>

        {/* desktop link */}
        <div className="hidden lg:flex">
          <Desktop />
        </div>

        {/* button */}
        <div className="cta hidden lg:flex">
          <Button />
        </div>

        {/* hamburger */}
        <div className="lg:hidden w-11 h-7 relative" onClick={handleMenuToggle}>
          <Image
            src={"/icons/hamburger.svg"}
            layout="fill"
            alt="Open Menu Icon"
            aria-label="open mobile menu"
          />
        </div>

        {/* mobile menu */}
        <AnimatePresence
          initial={false}
          mode={"wait"}
          onExitComplete={() => null}
        >
          {isOpen && <Mobile handleMenuToggle={handleMenuToggle} />}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header