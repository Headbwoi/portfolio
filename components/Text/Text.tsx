import React from "react"

type Props = {
  text: string
}

const Text = ({ text }: Props) => {
  return <div className="text-cyan font-bold font-pop">{text}</div>
}

export default Text
