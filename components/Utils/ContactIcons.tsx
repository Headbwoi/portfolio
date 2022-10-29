import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import IconLinks from "./IconLinks"
const ContactIcons = () => {
  return (
    <>
      {/* left */}
      <div className="flex items-center justify-center px-6 py-3 lg:py-0 lg:px-0 lg:w-10 border-cyan left-0 fixed z-30 bottom-0 lg:left-3 xl:left-10 right-auto">
        <ul className="flex lg:flex-col space-x-6 lg:space-x-0 lg:space-y-6 list-none  after:hidden lg:after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-4  ">
          <li className="w-5 h-5">
            <IconLinks iconName={faGithub} link="https://github.com/Headbwoi" />
          </li>
          <li className="w-5 h-5">
            <IconLinks
              iconName={faLinkedin}
              link="https://github.com/Headbwoi"
            />
          </li>
          <li className="w-5 h-5">
            <IconLinks
              iconName={faTwitter}
              link="https://github.com/Headbwoi"
            />
          </li>
        </ul>
      </div>
      {/* right */}
      <div className="flex flex-col items-center justify-center w-10 border-cyan fixed z-30 bottom-0 lg:right-3 right-10 left-auto">
        <ul className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white  "></ul>
      </div>
    </>
  )
}

export default ContactIcons
