import Link from "next/link"
type Props = {
  name: string
  children: React.ReactNode
}

const HeroNav = ({ name, children }: Props) => {
  return (
    <button
      className={`flex items-center justify-center rounded-md px-3 md:px-5 w-fit h-11 bg-buttonBg  hover:bg-cyan_dark duration-300 group cursor-pointer`}
    >
      <Link href={`${name.toLowerCase().replace(" ", "")}`}>
        <div className="flex w-full h-full items-center">
          <span className="text-white text-sm mr-3 group:hover:mr-1 font-semibold capitalize">
            {name}
          </span>
          <div className="h-4 w-4">{children}</div>
        </div>
      </Link>
    </button>
  )
}

export default HeroNav
