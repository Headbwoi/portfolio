import Image from "next/image"
import React from "react"

const Button = () => {
  return (
    <button className="rounded-md w-40 h-11 bg-buttonBg flex items-center justify-center hover:bg-cyan duration-300 group cursor-pointer">
      <span className="text-white text-[11px] mr-3 group:hover:mr-1 font-semibold">
        DOWNLOAD CV
      </span>
      <div className="w-3 h-3 relative">
        
      </div>
    </button>
  )
}

export default Button
