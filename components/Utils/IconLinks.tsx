import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type Props = {
  iconName: IconDefinition
  link: string
}

const IconLinks = ({ iconName, link }: Props) => {
  return (
    <Link href={`${link}`}>
      <a aria-label="Github" target={"_blank"}>
        <FontAwesomeIcon
          icon={iconName}
          className="text-white bg-body rounded-full bg-none"
          size="6x"
        />
      </a>
    </Link>
  )
}

export default IconLinks
