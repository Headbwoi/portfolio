import { motion } from "framer-motion"
import LinkWrapper from "./LinkWrapper"

const Desktop = () => {
  const linkArray = ["home", "about", "projects", "contact"]
  return (
    <motion.div
      className="flex items-center space-x-8 h-[5.375rem]"
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.5, delayChildren: 0.8 } }}
    >
      {linkArray.map((item, index) => (
        <LinkWrapper key={index} name={item} />
      ))}
    </motion.div>
  )
}

export default Desktop
