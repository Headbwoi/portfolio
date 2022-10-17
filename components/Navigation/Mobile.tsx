import Image from "next/image"
import Button from "../Utils/Button"
import LinkWrapper from "./LinkWrapper"
type Props = {
  handleMenuToggle: () => void
}

const Mobile = ({ handleMenuToggle }: Props) => {
  const linkArray = ["home", "about me", "portfolio", "experience", "contact"]
  return (
    <div className="lg:hidden absolute h-[50rem] w-full bg-veryDark inset-0">
      <div className="px-6 md:px-10 pt-3 md:pt-8 lg:pt-0 w-full mb-14">
        <header className="flex items-center justify-between mb-[5.25rem]">
          {/* icon */}
          <div className="w-[10.0625rem] h-[5.25rem] lg:w-[13.5625rem] lg:h-[6.25rem] relative">
            <Image src={"/icons/logo.svg"} layout="fill" alt="logo" priority />
          </div>

          {/* hamburger */}
          <div
            className="lg:hidden w-11 h-7 relative"
            onClick={handleMenuToggle}
          >
            <Image
              src={"/icons/close.svg"}
              layout="fill"
              alt="Open Menu Icon"
              aria-label="open mobile menu"
            />
          </div>
        </header>

        {/* links */}
        <div className="flex flex-col items-center space-y-10 mb-[5.25rem]">
          {linkArray.map((item, index) => (
            <LinkWrapper key={index} name={item} />
          ))}
        </div>
        <div className="w-48 mx-auto">
          <Button />
        </div>
      </div>
      Mobile
    </div>
  )
}

export default Mobile
