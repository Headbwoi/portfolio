import Link from "next/link"

type Props = {
  name: string
  iconName: string
  link: string
}

const IconLinks = ({ name, iconName, link }: Props) => {
  return (
    <Link href={`${link}`}>
      <a aria-label={name} target={"_blank"}></a>
    </Link>
  )
}

export default IconLinks
