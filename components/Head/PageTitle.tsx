import { motion } from "framer-motion"

type Props = {
  page: string
  addon: string
}

const PageTitle = ({ page, addon }: Props) => {
  return (
    <motion.div
      className="pt-16 lg:pt-28 flex items-center space-x-5"
      aria-label="heading"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } }}
    >
      <p className="text-3xl md:text-4xl text-white font-bold" id="heading">
        {page} <span className="text-cyan">{addon}</span>
      </p>
    </motion.div>
  )
}

export default PageTitle
