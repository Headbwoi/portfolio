import Image from "next/image"
import Button from "../Utils/Button"
import LinkWrapper from "./LinkWrapper"
import { motion } from "framer-motion"
import { menuVariant, navItem } from "../../variants/menuVariant"

type Props = {
  handleMenuToggle: () => void
}

const Mobile = ({ handleMenuToggle }: Props) => {
  const linkArray = ["home", "about me", "portfolio", "experience", "contact"]
  return (
    <motion.div
      className="lg:hidden absolute h-screen overflow-hidden w-3/4 top-0 right-0 bg-veryDark z-50"
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
          className="flex flex-col items-center space-y-10 mb-[5.25rem] mt-[8.25rem]"
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
        <div className="w-48 mx-auto">
          <Button />
        </div>
      </div>
      Mobile
    </motion.div>
  )
}

export default Mobile
