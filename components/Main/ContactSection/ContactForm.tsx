import { motion } from "framer-motion"
import { contactFormVariant } from "../../../variants/contactVariants"

const ContactForm = () => {
  return (
    <form className="flex flex-col justify-center items-center space-y-6 w-full">
      <motion.div
        className="h-14 w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
        initial={contactFormVariant.name.init}
        variants={contactFormVariant.name}
        whileInView={contactFormVariant.name.show}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="what's your name?"
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
          aria-label="enter your name"
        />
      </motion.div>
      <motion.div
        className="h-14 w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
        initial={contactFormVariant.email.init}
        variants={contactFormVariant.email}
        whileInView={contactFormVariant.email.show}
        viewport={{ once: true }}
      >
        <input
          type="email"
          name="email"
          placeholder="What's your @email address?"
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
        />
      </motion.div>
      <motion.div
        className="h-14 w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
        initial={contactFormVariant.text.init}
        variants={contactFormVariant.text}
        whileInView={contactFormVariant.text.show}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="textarea"
          placeholder="what do you have for me / offer "
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
        />
      </motion.div>
      <motion.div
        className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl"
        initial={contactFormVariant.text.init}
        variants={contactFormVariant.text}
        whileInView={contactFormVariant.text.show}
        viewport={{ once: true }}
      >
        <button
          type="submit"
          aria-label="send me the email"
          className="w-full h-full outline-none rounded-md bg-cyan_dark hover:bg-cyan duration-300 focus-visible:ring-cyan/70 focus-visible:ring-4 focus-visible:bg-cyan"
        >
          Send it to me
        </button>
      </motion.div>
    </form>
  )
}

export default ContactForm
