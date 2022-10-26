import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Desktop, Mobile } from "../Navigation/index"
import Button from "../Utils/Button"
import { AnimatePresence } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => {
    isOpen === true ? setIsOpen(!isOpen) : setIsOpen(!isOpen)
  }
  useEffect(() => {
    const body = document.querySelector("body")

    isOpen === true
      ? body?.classList.add("no-scroll")
      : body?.classList.remove("no-scroll")
  }, [isOpen])

  return (
    <header className="py-4 md:pt-5 lg:pt-0 w-full bg-body -mb-[1px]">
      <nav className=" h-10 md:h-16 lg:h-[6.25rem] container w-full flex items-center justify-between px-6 md:px-10 lg:px-0">
        {/* icon */}
        <Link href={"/"}>
          <div className="w-7 h-7  relative cursor-pointer">
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
          <Desktop />
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
