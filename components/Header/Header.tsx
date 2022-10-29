import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Desktop, Mobile } from "../Navigation/index"
import { AnimatePresence } from "framer-motion"
import { Download } from "../Main/icons"

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
    <header className=" w-full bg-body -mb-[1px] backdrop-blur-md fixed top-0 left-0 z-50 shadow-lg">
      <nav className=" h-10 md:h-16 lg:h-14 w-full flex items-center justify-between px-6 md:px-10 lg:px-14">
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
        <div className="hidden md:flex items-center space-x-8">
          <Desktop />
          {/* button */}
          <div className="cta hidden md:flex">
            <button
              className={`flex items-center justify-center rounded-md px-5 h-11 bg-buttonBg  hover:bg-cyan_dark duration-300 group cursor-pointer`}
            >
              <Link href={`/contactme`}>
                <span className="text-white text-base mr-3 group:hover:mr-1 font-normal capitalize tracking-wide">
                  resume
                </span>
              </Link>
              <Download height="4" width="4" />
            </button>
          </div>
        </div>

        {/* hamburger */}
        <div className="md:hidden w-10 h-5 relative" onClick={handleMenuToggle}>
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
