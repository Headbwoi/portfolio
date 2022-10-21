import Link from "next/link"
type Props = {
  name: string
  children: React.ReactNode
}

const HeroNav = ({ name, children }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col cursor-pointer group">
      <Link href={`${name.toLowerCase().replace(" ", "")}`}>
        <a className="flex items-center justify-center flex-col cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-[black] grid place-items-center">
            {children}
          </div>
          <p className="text-[14px] lg:text-sm  group-hover:text-cyan  font-pop text-text capitalize w-fit duration-300">
            {name}
          </p>
        </a>
      </Link>
    </div>
  )
}

export default HeroNav
