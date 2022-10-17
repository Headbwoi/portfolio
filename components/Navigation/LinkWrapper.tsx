import Link from "next/link"
type Props = {
  name: string
}

const LinkWrapper = ({ name }: Props) => {
  return (
    <div>
      <Link href={`#${name}`}>
        <a className="text-nav hover:text-nav-hover text-text ">{name}</a>
      </Link>
    </div>
  )
}

export default LinkWrapper
