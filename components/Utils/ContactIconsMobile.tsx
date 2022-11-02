import Link from "next/link"
import IconLinks from "./IconLinks"
import Github from "./icons/Github"
import LinkedIn from "./icons/linkedIn"
import Twitter from "./icons/Twitter"
const ContactIconsMobile = () => {
  return (
    <div className="md:hidden bg-gray/30 w-full fixed h-6 bottom-0 left-0 px-6 py-5 flex items-center justify-between z-30">
      {/* left */}
      <div className="flex items-center justify-center border-cyan left-0 right-auto">
        <ul className="flex lg:flex-col space-x-6  list-none">
          <li className="w-5 h-5">
            <IconLinks link="https://github.com/Headbwoi" name="Github">
              <Github />
            </IconLinks>
          </li>
          <li className="w-5 h-5">
            <IconLinks link="https://github.com/Headbwoi" name="Github">
              <LinkedIn />
            </IconLinks>
          </li>
          <li className="w-5 h-5">
            <IconLinks link="https://twitter.com/Headbwoi_1" name="Github">
              <Twitter />
            </IconLinks>
          </li>
        </ul>
      </div>
      {/* right */}
      <div className="flex items-center justify-center border-cyan left-auto">
        <div className="list-none">
          <div className="md:rotate-90">
            <Link href={`/`}>
              <a className="text-text hover:text-cyan duration-200 font-pop text-sm font-semibold ">
                xeuxdev@gmail.com
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactIconsMobile
