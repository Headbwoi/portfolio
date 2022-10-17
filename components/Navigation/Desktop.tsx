import LinkWrapper from "./LinkWrapper"

const Desktop = () => {
  return (
    <div className="hidden lg:flex items-center space-x-6 h-[5.375rem] w-[34.0625rem] ">
      <LinkWrapper name="Home" />
      <LinkWrapper name="about me" />
      <LinkWrapper name="portfolio" />
      <LinkWrapper name="experience" />
      <LinkWrapper name="contact" />
    </div>
  )
}

export default Desktop
