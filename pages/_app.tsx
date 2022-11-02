import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactIcons, ContactIconsMobile, Header } from "../components"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const [screenSize, setScreenSize] = useState({} as Number)

  useEffect(() => {
    return () => {
      setScreenSize(window.screen.width)
    }
  }, [screenSize])
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {screenSize < 768 ? <ContactIconsMobile /> : <ContactIcons />}
    </>
  )
}

export default MyApp
