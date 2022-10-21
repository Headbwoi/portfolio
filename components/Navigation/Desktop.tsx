import LinkWrapper from "./LinkWrapper"
const Desktop = () => {
  const linkArray = [
    "home",
    "about me",
    "skills",
    "projects",
    "experiences",
    "contact",
  ]
  return (
    <div className="flex items-center space-x-8 h-[5.375rem] min-w-[33.0625rem]">
      {linkArray.map((item, index) => (
        <LinkWrapper key={index} name={item} />
      ))}
    </div>
  )
}

export default Desktop
