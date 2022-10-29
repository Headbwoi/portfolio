import React from "react"

type Props = {
  text: string
}

const Text = ({ text }: Props) => {
  return <div className="text-cyan font-bold font-pop inline-block">{text}</div>
}

export default Text
