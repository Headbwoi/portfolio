import Link from "next/link"
type Props = {
  name: string
}

const LinkWrapper = ({ name }: Props) => {
  return (
    <div>
      <Link href={`#${name.toLowerCase().replace(" ", "")}`}>
        <a className="text-nav hover:text-nav-hover text-text capitalize px-[2px]">
          {name}
        </a>
      </Link>
    </div>
  )
}

export default LinkWrapper
