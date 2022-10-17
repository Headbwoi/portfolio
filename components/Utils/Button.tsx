import Image from "next/image"
import React from "react"

const Button = () => {
  return (
    <button className="rounded-md w-44 h-11 bg-buttonBg flex items-center justify-center hover:bg-cyan duration-300 group cursor-pointer">
      <span className="text-white text-[11px] mr-3 group:hover:mr-1 font-semibold">
        DOWNLOAD CV
      </span>
      <div className="w-3 h-3 relative">
        <Image
          src={"/icons/download.svg"}
          layout="fill"
          alt="download cv"
          aria-label="download my cv"
        />
      </div>
    </button>
  )
}

export default Button
