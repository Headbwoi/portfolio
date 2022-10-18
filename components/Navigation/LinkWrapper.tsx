import Link from "next/link"
type Props = {
  name: string
  handleMenuToggle: () => void
}

const LinkWrapper = ({ name, handleMenuToggle }: Props) => {
  return (
    <Link href={`#${name.toLowerCase().replace(" ", "")}`}>
      <a
        className="text-navlg lg:text-nav  hover:text-cyan  text-text capitalize w-fit duration-300"
        onClick={handleMenuToggle}
      >
        {name}
      </a>
    </Link>
  )
}

export default LinkWrapper
