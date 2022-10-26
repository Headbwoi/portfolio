import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { menuVariant, navItem } from "../../variants/menuVariant"
import { Download } from "../Main/icons"

type Props = {
  handleMenuToggle: () => void
}

const Mobile = ({ handleMenuToggle }: Props) => {
  const linkArray = [
    "home",
    "about me",
    "projects",
    "experiences",
    "contact me",
  ]
  return (
    <motion.div
      className="md:hidden absolute h-screen overflow-hidden w-3/4 top-0 right-0 bg-veryDark z-50"
      initial={{ opacity: 0 }}
      variants={menuVariant}
      whileInView={"show"}
      exit={"exit"}
    >
      <div className="px-6 md:px-10 w-full">
        <div className="absolute right-6 top-9 ">
          {/* hamburger */}
          <div className="lg:hidden" onClick={handleMenuToggle}>
            <Image
              src={"/icons/close.svg"}
              alt="Open Menu Icon"
              aria-label="open mobile menu"
              width={44}
              height={28}
            />
          </div>
        </div>

        {/* links */}
        <motion.div
          className="flex flex-col items-center space-y-7 mb-[5.25rem] mt-[8.25rem]"
          initial={{ opacity: 0 }}
          whileInView={navItem.show}
          exit={navItem.exit}
        >
          {linkArray.map((item, index) => (
            <LinkWrapper
              key={index}
              name={item}
              handleMenuToggle={handleMenuToggle}
            />
          ))}
        </motion.div>
        <div className="flex justify-center ">
          <button
            className={`flex items-center justify-center rounded-md px-5 h-11 bg-buttonBg  hover:bg-cyan duration-300 group cursor-pointer`}
          >
            <Link href={`/contactme`}>
              <span className="text-white text-base mr-3 group:hover:mr-1 font-semibold capitalize">
                resume
              </span>
            </Link>
            <Download height="4" width="4" />
          </button>
        </div>
      </div>
      Mobile
    </motion.div>
  )
}

export default Mobile

type linkProp = {
  name: string
  handleMenuToggle: () => void
}

const LinkWrapper = ({ name, handleMenuToggle }: linkProp) => {
  return (
    <Link
      href={`${name == "home" ? "/" : name.toLowerCase().replace(" ", "")}`}
    >
      <a
        className="text-lg  hover:text-cyan  text-text capitalize w-fit duration-300 flex items-center space-x-4"
        onClick={handleMenuToggle}
      >
        {name}
      </a>
    </Link>
  )
}
