import Image from "next/image"
type Props = {
  width: string
  height: string
  lgHeight?: string
  lgWidth?: string
  file: string
  altText: string
}

const ImageWrapper = ({
  height,
  width,
  lgHeight,
  lgWidth,
  file,
  altText,
}: Props) => {
  return (
    <div
      className={`w-[${width}] h-[${height}] lg:w-[${lgWidth}] lg:h-[${lgHeight}] relative`}
    >
      <Image src={`/${file}`} alt={`${altText}`} layout="fill" />
    </div>
  )
}

export default ImageWrapper
