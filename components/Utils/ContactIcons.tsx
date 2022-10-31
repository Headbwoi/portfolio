import Link from "next/link"
import IconLinks from "./IconLinks"
const ContactIcons = () => {
  return (
    <div className="hidden md:block">
      {/* left */}
      <div className="flex items-center justify-center py-0 px-0 w-10 border-cyan fixed z-30 bottom-0 lg:left-3 left-10 right-auto">
        <ul className="flex lg:flex-col space-x-6 lg:space-x-0 lg:space-y-6 list-none  after:hidden lg:after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-4  ">
          <li className="w-5 h-5"></li>
          <li className="w-5 h-5"></li>
          <li className="w-5 h-5"></li>
        </ul>
      </div>
      {/* right */}
      <div className="flex items-center justify-center py-0 px-0 w-10 border-cyan right-0 fixed z-30 bottom-0 lg:right-3 xl:right-10 left-auto">
        <div className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-20 ">
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

export default ContactIcons
