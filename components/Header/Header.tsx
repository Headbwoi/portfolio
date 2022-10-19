import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Desktop, Mobile } from "../Navigation/index"
import Button from "../Utils/Button"
import { AnimatePresence } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => {
    isOpen ? setIsOpen((prev) => !prev) : setIsOpen((prev) => !prev)
    const body = document.querySelector("body")
    isOpen == true
      ? body?.classList.remove("overflow-hidden")
      : body?.classList.add("overflow-hidden")
  }
  return (
    <header className="py-4 md:pt-5 lg:pt-0 w-full bg-body -mb-[1px]">
      <nav className=" h-10 md:h-16 lg:h-[6.25rem] container w-full flex items-center justify-between px-6 md:px-10 lg:px-5 xl:px-0">
        {/* icon */}
        <Link href={"/"}>
          <div className="w-[9.0625rem] h-[4.25rem] lg:w-[12.5625rem] lg:h-[5.25rem] relative cursor-pointer">
            <Image
              src={"/icons/logo.svg"}
              layout="fill"
              alt="logo"
              priority={true}
            />
          </div>
        </Link>

        {/* desktop link */}
        <div className="hidden lg:flex">
          <Desktop handleMenuToggle={handleMenuToggle} />
        </div>

        {/* button */}
        <div className="cta hidden lg:flex">
          <Button />
        </div>

        {/* hamburger */}
        <div className="lg:hidden w-10 h-5 relative" onClick={handleMenuToggle}>
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
